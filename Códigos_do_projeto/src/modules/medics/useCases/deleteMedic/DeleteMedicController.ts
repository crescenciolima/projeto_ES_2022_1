import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteMedicUseCase } from "./DeleteMedicUseCase";

class DeleteMedicController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteMedicUseCase = container.resolve(DeleteMedicUseCase);

    await deleteMedicUseCase.execute(id);

    return response.status(204).send();
  }
}

export { DeleteMedicController };
