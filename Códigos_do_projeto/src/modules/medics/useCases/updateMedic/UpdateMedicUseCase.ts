import { IUpdateMedicDTO } from "@modules/medics/dtos/IUpdateMedicDTO";
import { IMedicsRepository } from "@modules/medics/repositories/IMedicsRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt"

@injectable()
class UpdateMedicUseCase {
  constructor(
    @inject("MedicsRepository")
    private medicsRepository: IMedicsRepository
  ) { }

  async execute(id: string, data: IUpdateMedicDTO): Promise<void> {
    const passwordHash = await hash(data.password, 8)
    data = {
      id: id,
      name: data.name,
      ethnicity: data.ethnicity,
      nationality: data.nationality,
      crm: data.crm,
      cpf: data.cpf,
      password: passwordHash,
      marital_status: data.marital_status,
      birth_date: data.birth_date,
      address: data.address,
      city: data.city,
      state: data.state,
      gender: data.gender,
      especialization: data.especialization,
      phone_number: data.phone_number
    }
    await this.medicsRepository.updateMedic(id, data)
  }
}

export { UpdateMedicUseCase }