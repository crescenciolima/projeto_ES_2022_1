import { ICreateMedicTokenDTO } from "../dtos/ICreateMedicTokenDTO"
import { MedicTokens } from "../infra/typeorm/entities/MedicTokens"

interface IMedicsTokensRepository {
  create({ expires_date, refresh_token, medic_id }: ICreateMedicTokenDTO): Promise<MedicTokens>
  findByUserIdAndRefreshToken(medic_id: string, refresh_token: string): Promise<MedicTokens>
  deleteById(id: string): Promise<void>
}

export { IMedicsTokensRepository }