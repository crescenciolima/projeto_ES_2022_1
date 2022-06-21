import { Router } from "express";
import { CreateResidentController } from "@modules/residents/useCases/createResident/CreateResidentController";
import { DeleteResidentController } from "@modules/residents/useCases/deleteResident/DeleteResidentController";
import { ListResidentsController } from "@modules/residents/useCases/listResidents/ListResidentsController";
import { UpdateResidentController } from "@modules/residents/useCases/updateResident/UpdateResidentController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const residentsRoutes = Router();

const createResidentController = new CreateResidentController();
const listResidentController = new ListResidentsController();
const deleteResidentController = new DeleteResidentController();
const updateResidentController = new UpdateResidentController();

residentsRoutes.post("/", ensureAuthenticated, createResidentController.handle);
residentsRoutes.get("/", ensureAuthenticated, listResidentController.handle);
residentsRoutes.delete(
  "/:id",
  ensureAuthenticated,
  deleteResidentController.handle
);
residentsRoutes.put(
  "/:id",
  ensureAuthenticated,
  updateResidentController.handle
);

export { residentsRoutes };
