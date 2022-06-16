import { Exam } from "@modules/exams/infra/typeorm/entities/Exam";
import { IExamsRepository } from "@modules/exams/repositories/IExamsRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListExamsUseCase {
  constructor(
    @inject("ExamsRepository")
    private examsRepository: IExamsRepository
  ) { }

  async execute(): Promise<Exam[]> {
    const exams = await this.examsRepository.getAll()
    return exams
  }
}

export { ListExamsUseCase }