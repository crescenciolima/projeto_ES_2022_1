import { inject, injectable } from "tsyringe";
import { Resident } from "@modules/residents/infra/typeorm/entities/Resident";
import { IResidentsRepository } from "@modules/residents/repositories/IResidentsRepository";
import { ICreateResidentsDTO } from "@modules/residents/dtos/ICreateResidentDTO";
import { hash } from "bcrypt";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateResidentUseCase {
  constructor(
    @inject("ResidentsRepository")
    private residentsRepository: IResidentsRepository
  ) {}

  async execute({
    name,
    nationality,
    ethnicity,
    crm,
    cpf,
    residence_date,
    password,
    marital_status,
    birth_date,
    address,
    city,
    state,
    gender,
    especialization,
    phone_number,
  }: ICreateResidentsDTO): Promise<Resident> {
    const residentAlreadyExistsCpf = await this.residentsRepository.findByCpf(
      cpf
    );
    if (residentAlreadyExistsCpf) {
      throw new AppError("Resident already exists!");
    }
    const residentAlreadyExistsCrm = await this.residentsRepository.findByCrm(
      crm
    );
    if (residentAlreadyExistsCrm) {
      throw new AppError("Resident already exists!");
    }

    const passwordHash = await hash(password, 8);

    const resident = await this.residentsRepository.create({
      name,
      nationality,
      ethnicity,
      crm,
      cpf,
      residence_date,
      password: passwordHash,
      marital_status,
      birth_date,
      address,
      city,
      state,
      gender,
      especialization,
      phone_number,
    });
    return resident;
  }
}

export { CreateResidentUseCase };
