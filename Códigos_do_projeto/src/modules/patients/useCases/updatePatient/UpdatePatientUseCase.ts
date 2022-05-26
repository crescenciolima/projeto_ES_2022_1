import { IUpdatePatientDTO } from "@modules/patients/dtos/IUpdatePatientDTO";
import { Patient } from "@modules/patients/infra/typeorm/entities/Patient";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdatePatientUseCase {
  constructor(
    @inject("PatientsRepository")
    private patientesRepository: IPatientsRepository
  ) { }
  async execute(id: string, data: IUpdatePatientDTO): Promise<Patient> {
    const patient = await this.patientesRepository.findById(id)

    if (!patient) {
      throw new AppError("Patient does not exists!")
    }

    data = {
      id: id,
      name: data.name,
      ethnicity: data.ethnicity,
      nationality: data.nationality,
      cpf: data.cpf,
      birth_date: data.birth_date,
      marital_status: data.marital_status,
      address: data.address,
      state: data.state,
      city: data.city,
      gender: data.gender,
      phone_number: data.phone_number
    }
    
    await this.patientesRepository.updatePatient(id, data)
    return patient
  }
}

export { UpdatePatientUseCase }