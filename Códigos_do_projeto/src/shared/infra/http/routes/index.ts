import { Router } from "express";
import "reflect-metadata"
import { patientsRoutes } from "./patients.routes";

const router = Router()

router.use("/patients", patientsRoutes)

export { router }