import { Router } from "express";
import { CreateMedicController } from "@modules/medics/useCases/createMedic/CreateMedicController";
import { ListMedicsController } from "@modules/medics/useCases/listMedics/ListMedicsController";
import { DeleteMedicController } from "@modules/medics/useCases/deleteMedic/DeleteMedicController";
import { UpdateMedicController } from "@modules/medics/useCases/updateMedic/UpdateMedicController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const medicsRoutes = Router();

const createMedicController = new CreateMedicController();
const listMedicController = new ListMedicsController();
const deleteMedicController = new DeleteMedicController();
const updateMedicController = new UpdateMedicController();

medicsRoutes.post("/", ensureAuthenticated, createMedicController.handle);
medicsRoutes.get("/", ensureAuthenticated, listMedicController.handle);
medicsRoutes.delete("/:id", ensureAuthenticated, deleteMedicController.handle);
medicsRoutes.put("/:id", ensureAuthenticated, updateMedicController.handle);

export { medicsRoutes };
