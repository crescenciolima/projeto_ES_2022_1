import { ICreateExamDTO } from "@modules/exams/dtos/ICreateExamDTO"
import { Exam } from "@modules/exams/infra/typeorm/entities/Exam"
import { IExamsRepository } from "@modules/exams/repositories/IExamsRepository"
import { inject, injectable } from "tsyringe"

@injectable()
class CreateExamUseCase {
  constructor(
    @inject("ExamsRepository")
    private examsRepository: IExamsRepository
  ) {}

  async execute({ name, date, attachment, report, status, examRequest_id }: ICreateExamDTO): Promise<Exam> {
    const exam = await this.examsRepository.create ({
      name,
      date,
      attachment,
      report,
      status,
      examRequest_id
    })

    return exam
  }
}

export { CreateExamUseCase }