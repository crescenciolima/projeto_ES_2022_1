import { Patient } from "@modules/patients/infra/typeorm/entities/Patient";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListPatientsUseCase {
  constructor(
    @inject("PatientsRepository")
    private patientsRepository: IPatientsRepository
  ) { }

  async execute(): Promise<Patient[]> {
    const patients = await this.patientsRepository.getAll()
    return patients
  }
}

export { ListPatientsUseCase }