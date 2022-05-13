import { Router } from "express";
import { CreatePatientController } from "@modules/patients/useCases/createPatient/CreatePatientController";
import { ListPatientsController } from "@modules/patients/useCases/listPatients/ListPatientsController";
import { DeletePatientController } from "@modules/patients/useCases/deletePatient/DeletePatientController";
import { UpdatePatientController } from "@modules/patients/useCases/updatePatient/UpdatePatientController";

const patientsRoutes = Router()

const createPatientController = new CreatePatientController()
const listPatientsController = new ListPatientsController()
const deletePatientController = new DeletePatientController()
const updatePatientController = new UpdatePatientController()

patientsRoutes.post("/", createPatientController.handle)
patientsRoutes.get("/", listPatientsController.handle)
patientsRoutes.delete("/:id", deletePatientController.handle)
patientsRoutes.put("/:id", updatePatientController.handle)


export { patientsRoutes }