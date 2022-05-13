import { inject, injectable } from "tsyringe";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";
import { AppError } from "@shared/errors/AppError";
import { Patient } from "@modules/patients/infra/typeorm/entities/Patient";

@injectable()
class DeletePatientUseCase {
  constructor(
    @inject("PatientsRepository")
    private patientsRepository: IPatientsRepository
  ) { }

  async execute(id: string): Promise<void> {
    const patient = await this.patientsRepository.findById(id)

    if (!patient) {
      throw new AppError("Patient does not exists!")
    }

    await this.patientsRepository.delete(id)
  }
}

export { DeletePatientUseCase }