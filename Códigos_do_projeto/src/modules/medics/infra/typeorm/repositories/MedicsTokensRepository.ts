import { ICreateMedicTokenDTO } from "@modules/medics/dtos/ICreateMedicTokenDTO";
import { IMedicsTokensRepository } from "@modules/medics/repositories/IMedicsTokensRepository";
import { getRepository, Repository } from "typeorm";
import { MedicTokens } from "../entities/MedicTokens";


class MedicsTokenRepository implements IMedicsTokensRepository {
  private repository: Repository<MedicTokens>

  constructor() {
    this.repository = getRepository(MedicTokens)
  }

  async create({ expires_date, refresh_token, medic_id }: ICreateMedicTokenDTO): Promise<MedicTokens> {
    const medicToken = this.repository.create({
      expires_date,
      refresh_token,
      medic_id
    })

    await this.repository.save(medicToken)

    return medicToken
  }

  async findByUserIdAndRefreshToken(medic_id: string, refresh_token: string): Promise<MedicTokens> {
    const medicsTokens = await this.repository.findOne({ medic_id, refresh_token })
    return medicsTokens
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}

export { MedicsTokenRepository }