import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"
import { Medic } from "./Medic";


@Entity("medics_tokens")
class MedicTokens {

  @PrimaryColumn()
  id: string

  @Column()
  refresh_token: string

  @Column()
  medic_id: string

  @ManyToOne(() => Medic)
  @JoinColumn({ name: "medic_id" })
  medic: Medic

  @Column()
  expires_date: Date

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { MedicTokens }