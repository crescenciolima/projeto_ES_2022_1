import { Router } from "express";
import { CreatePatientController } from "@modules/patients/useCases/createPatient/CreatePatientController";
import { ListPatientsController } from "@modules/patients/useCases/listPatients/ListPatientsController";
import { DeletePatientController } from "@modules/patients/useCases/deletePatient/DeletePatientController";
import { UpdatePatientController } from "@modules/patients/useCases/updatePatient/UpdatePatientController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const patientsRoutes = Router()

const createPatientController = new CreatePatientController()
const listPatientsController = new ListPatientsController()
const deletePatientController = new DeletePatientController()
const updatePatientController = new UpdatePatientController()

patientsRoutes.post("/", ensureAuthenticated, createPatientController.handle)
patientsRoutes.get("/", ensureAuthenticated, listPatientsController.handle)
patientsRoutes.delete("/:id", ensureAuthenticated, deletePatientController.handle)
patientsRoutes.put("/:id", ensureAuthenticated, updatePatientController.handle)

export { patientsRoutes }