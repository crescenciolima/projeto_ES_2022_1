import { ICreatePatientDTO } from "@modules/patients/dtos/ICreatePatientDTO";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreatePatientUseCase {
  constructor(
    @inject("PatientsRepository")
    private patientsRepository: IPatientsRepository
  ) { }

  async execute({ name, ethnicity, nationality, cpf, birth_date, marital_status, address, state, city, gender, phone_number }: ICreatePatientDTO): Promise<void> {
    const patientAlreadyExistsCpf = await this.patientsRepository.findByCpf(cpf)

    if (patientAlreadyExistsCpf) {
      throw new AppError("Patient already exists!")
    }

    await this.patientsRepository.create({
      name,
      ethnicity,
      nationality,
      cpf,
      birth_date,
      marital_status,
      address,
      state,
      city,
      gender,
      phone_number
    })
  }
}

export { CreatePatientUseCase }