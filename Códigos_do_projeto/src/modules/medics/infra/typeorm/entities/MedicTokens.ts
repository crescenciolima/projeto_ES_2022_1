import { Resident } from "@modules/residents/infra/typeorm/entities/Resident";
import { Teacher } from "@modules/teachers/infra/typeorm/entities/Teacher";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Medic } from "./Medic";

@Entity("medics_tokens")
class MedicTokens {
  @PrimaryColumn()
  id: string;

  @Column()
  refresh_token: string;

  @Column()
  medic_id: string;

  @ManyToOne(() => Medic)
  @JoinColumn({ name: "medic_id" })
  medic: Medic;

  @ManyToOne(() => Resident)
  @JoinColumn({ name: "medic_id" })
  resident: Resident;

  @ManyToOne(() => Teacher)
  @JoinColumn({ name: "medic_id" })
  teacher: Teacher;

  @Column()
  expires_date: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { MedicTokens };
