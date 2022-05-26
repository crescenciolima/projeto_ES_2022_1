import { IUpdateMedicDTO } from "@modules/medics/dtos/IUpdateMedicDTO";
import { IMedicsRepository } from "@modules/medics/repositories/IMedicsRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt"
import { Medic } from "@modules/medics/infra/typeorm/entities/Medic";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateMedicUseCase {
  constructor(
    @inject("MedicsRepository")
    private medicsRepository: IMedicsRepository
  ) { }

  async execute(id: string, data: IUpdateMedicDTO): Promise<Medic> {
    const medic = await this.medicsRepository.findById(id)
    const passwordHash = await hash(data.password, 8)

    if(!medic) {
      throw new AppError("Medic does not exists!")
    }
    
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
    return medic
  }
}

export { UpdateMedicUseCase }