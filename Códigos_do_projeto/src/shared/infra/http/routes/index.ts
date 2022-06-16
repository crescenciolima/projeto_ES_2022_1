import { Router } from "express";
import "reflect-metadata";
import { authenticateRoutes } from "./authenticate.routes";
import { examsRoutes } from "./exams.routes";
import { examRequestsRoutes } from "./examsRequest.routes";
import { medicsRoutes } from "./medics.routes";
import { patientsRoutes } from "./patients.routes";

const router = Router();

router.use("/patients", patientsRoutes);
router.use("/medics", medicsRoutes);
router.use("/exams", examsRoutes);
router.use("/examRequests", examRequestsRoutes);
router.use(authenticateRoutes);

export { router };
