import { inject, injectable } from 'tsyringe';
import 'reflect-metadata';
import { IMedicsRepository } from '@modules/medics/repositories/IMedicsRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from '@shared/errors/AppError';
import { IMedicsTokensRepository } from '@modules/medics/repositories/IMedicsTokensRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import auth from '@config/auth';

interface IRequest {
  cpf: string;
  password: string;
}

interface IResponse {
  medic: {
    name: string;
    cpf: string;
  };
  token: string;
  refresh_token: string;
}

@injectable()
class AuthenticateMedicUseCase {
  constructor(
    @inject("MedicsRepository")
    private medicsRepository: IMedicsRepository,
    @inject("MedicsTokensRepository")
    private medicsTokensRepository: IMedicsTokensRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) { }

  async execute({ cpf, password }: IRequest): Promise<IResponse> {
    const medic = await this.medicsRepository.findByCpf(cpf);
    const {
      expires_in_token,
      secret_refresh_token,
      secret_token,
      expires_in_refresh_token,
      expires_refresh_token_days,
    } = auth;

    if (!medic) {
      throw new AppError("Cpf or password incorrect!");
    }

    const passwordMatch = await compare(password, medic.password);

    if (!passwordMatch) {
      throw new AppError("Cpf or password incorrect!");
    }

    const token = sign({}, secret_token, {
      subject: medic.id,
      expiresIn: expires_in_token,
    });

    const refresh_token = sign({ cpf }, secret_refresh_token, {
      subject: medic.id,
      expiresIn: expires_in_refresh_token,
    });

    const refresh_token_expires_date = this.dateProvider.addDays(
      expires_refresh_token_days
    );

    await this.medicsTokensRepository.create({
      medic_id: medic.id,
      refresh_token,
      expires_date: refresh_token_expires_date,
    });

    const tokenReturn: IResponse = {
      token,
      medic: {
        name: medic.name,
        cpf: medic.cpf,
      },
      refresh_token,
    };

    return tokenReturn;
  }
}

export { AuthenticateMedicUseCase };
