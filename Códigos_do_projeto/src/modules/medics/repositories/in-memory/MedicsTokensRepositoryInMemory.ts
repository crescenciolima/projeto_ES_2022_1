import { ICreateMedicTokenDTO } from "@modules/medics/dtos/ICreateMedicTokenDTO";
import { MedicTokens } from "@modules/medics/infra/typeorm/entities/MedicTokens";
import { IMedicsTokensRepository } from "../IMedicsTokensRepository";

class MedicsTokensRepositoryInMemory implements IMedicsTokensRepository {
  medicsTokens: MedicTokens[] = []

  async create({ expires_date, refresh_token, medic_id }: ICreateMedicTokenDTO): Promise<MedicTokens> {
    const medicToken = new MedicTokens()

    Object.assign(medicToken, {
      expires_date,
      refresh_token,
      medic_id
    })

    this.medicsTokens.push(medicToken)

    return medicToken
  }
  async findByMedicIdAndRefreshToken(medic_id: string, refresh_token: string): Promise<MedicTokens> {
    const medicToken = this.medicsTokens.find(mt => mt.medic_id === medic_id && mt.refresh_token && refresh_token)

    return medicToken
  }
  async deleteById(id: string): Promise<void> {
    const medicToken = this.medicsTokens.find((mt) => mt.id === id)
    this.medicsTokens.splice(this.medicsTokens.indexOf(medicToken))
  }

}

export { MedicsTokensRepositoryInMemory }