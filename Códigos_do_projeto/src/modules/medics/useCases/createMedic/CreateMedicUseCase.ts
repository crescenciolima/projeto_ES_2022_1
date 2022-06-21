import { Medic } from "@modules/medics/infra/typeorm/entities/Medic";
import { IMedicsRepository } from "@modules/medics/repositories/IMedicsRepository";
import { hash } from "bcrypt";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICreateMedicDTO } from "@modules/medics/dtos/ICreateMedicDTO";

@injectable()
class CreateMedicUseCase {
  constructor(
    @inject("MedicsRepository")
    private medicsRepository: IMedicsRepository
  ) {}

  async execute({
    name,
    nationality,
    ethnicity,
    crm,
    cpf,
    password,
    marital_status,
    birth_date,
    address,
    city,
    state,
    gender,
    especialization,
    phone_number,
  }: ICreateMedicDTO): Promise<Medic> {
    const medicAlreadyExistsCpf = await this.medicsRepository.findByCpf(cpf);
    if (medicAlreadyExistsCpf) {
      throw new AppError("Medic already exists!");
    }
    const medicAlreadyExistsCrm = await this.medicsRepository.findByCrm(crm);
    if (medicAlreadyExistsCrm) {
      throw new AppError("Medic already exists!");
    }

    const passwordHash = await hash(password, 8);

    const medic = await this.medicsRepository.create({
      name,
      nationality,
      ethnicity,
      crm,
      cpf,
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
    return medic;
  }
}

export { CreateMedicUseCase };
