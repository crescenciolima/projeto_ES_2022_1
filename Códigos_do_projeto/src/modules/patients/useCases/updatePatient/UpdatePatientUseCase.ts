import { IUpdatePatientDTO } from "@modules/patients/dtos/IUpdatePatientDTO";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdatePatientUseCase {
  constructor(
    @inject("PatientsRepository")
    private patientesRepository: IPatientsRepository
  ) { }
  async execute(id: string, data: IUpdatePatientDTO): Promise<void> {
    data = {
      id: id,
      name: data?.name,
      ethnicity: data?.ethnicity,
      nationality: data?.nationality,
      cpf: data?.cpf,
      birth_date: data?.birth_date,
      marital_status: data?.marital_status,
      address: data?.address,
      state: data?.state,
      city: data?.city,
      gender: data?.gender,
      phone_number: data?.phone_number
    }
    await this.patientesRepository.updateUser(id, data)
  }
}

export { UpdatePatientUseCase }