import { Router } from "express";
import { AuthenticateMedicController } from "@modules/medics/useCases/authenticateMedic/AuthenticateMedicController";
import { RefreshTokenController } from "@modules/medics/useCases/refreshToken/RefreshTokenController";

const authenticateRoutes = Router()

const authenticateMedicController = new AuthenticateMedicController()
const refreshTokenController = new RefreshTokenController()

authenticateRoutes.post("/sessions", authenticateMedicController.handle)
authenticateRoutes.post("/refresh-token", refreshTokenController.handle)

export { authenticateRoutes }