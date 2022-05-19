import { container } from "tsyringe";

import "@shared/container/providers"

import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";
import { PatientsRepository } from "@modules/patients/infra/typeorm/repositories/PatientsRepository";
import { IMedicsRepository } from "@modules/medics/repositories/IMedicsRepository";
import { MedicsRepository } from "@modules/medics/infra/typeorm/repositories/MedicsRepository";
import { IMedicsTokensRepository } from "@modules/medics/repositories/IMedicsTokensRepository";
import { MedicsTokenRepository } from "@modules/medics/infra/typeorm/repositories/MedicsTokensRepository";

container.registerSingleton<IPatientsRepository>(
  "PatientsRepository",
  PatientsRepository
)

container.registerSingleton<IMedicsRepository>(
  "MedicsRepository",
  MedicsRepository
)

container.registerSingleton<IMedicsTokensRepository>(
  "MedicsTokensRepository",
  MedicsTokenRepository
)