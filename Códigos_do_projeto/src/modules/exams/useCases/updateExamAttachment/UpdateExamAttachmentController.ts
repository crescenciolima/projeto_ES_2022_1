import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateExamAttachmentUseCase } from "./UpdateExamAttachmentUseCase";

class UpdateExamAttachmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const attachment = request.file.filename;

    const updateExamAttachmentUseCase = container.resolve(
      UpdateExamAttachmentUseCase
    );

    await updateExamAttachmentUseCase.execute({ exam_id: id, attachment });

    return response.status(204).send();
  }
}

export { UpdateExamAttachmentController };
