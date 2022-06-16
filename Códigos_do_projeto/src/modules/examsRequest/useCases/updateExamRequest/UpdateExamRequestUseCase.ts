import { IUpdateExamRequestDTO } from "@modules/examsRequest/dtos/IUpdateExamRequestDTO";
import { ExamRequest } from "@modules/examsRequest/infra/typeorm/entities/ExamRequest";
import { IExamsRequestRepository } from "@modules/examsRequest/repositories/IExamsRequestRepository";
import { AppError } from "@shared/errors/AppError";
import { inject } from "tsyringe";

class UpdateExamRequestUseCase {
  constructor (
    @inject("ExamsRequestRepository")
    private examsRequestRepository: IExamsRequestRepository
  ) { }

  async execute(id: string, data: IUpdateExamRequestDTO): Promise<ExamRequest> {
    const examRequest = await this.examsRequestRepository.findById(id)

    if (!examRequest) {
      throw new AppError("Exam request does not exists!")
    }

    data = {
      id: id,
      exams: data.exams,
      diagnostic_hypothesis: data.diagnostic_hypothesis,
      date: data.date
    }

    await this.examsRequestRepository.updateExamRequest(id, data)
    return examRequest
  }
}

export { UpdateExamRequestUseCase }