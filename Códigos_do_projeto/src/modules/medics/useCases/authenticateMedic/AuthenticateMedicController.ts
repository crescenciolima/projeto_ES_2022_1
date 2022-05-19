import { Request, Response } from "express"
import { container } from "tsyringe"
import { AuthenticatMedicUseCase } from "./AuthenticateMedicUseCase"


class AuthenticateMedicController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, cpf } = request.body

    const authenticateMedicUseCase = container.resolve(AuthenticatMedicUseCase)

    const token = await authenticateMedicUseCase.execute({
      password,
      cpf
    })

    return response.json(token)
  }
}

export { AuthenticateMedicController }