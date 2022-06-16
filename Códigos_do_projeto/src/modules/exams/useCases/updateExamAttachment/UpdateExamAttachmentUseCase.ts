import { inject, injectable } from "tsyringe";
import { IExamsRepository } from "@modules/exams/repositories/IExamsRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";

interface IRequest {
  exam_id: string;
  attachment: string;
}

@injectable()
class UpdateExamAttachmentUseCase {
  constructor(
    @inject("ExamsRepository")
    private examsRepository: IExamsRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute({ exam_id, attachment }: IRequest): Promise<void> {
    const exam = await this.examsRepository.findById(exam_id);

    if (exam.attachment) {
      await this.storageProvider.delete(exam.attachment, "exams");
    }

    await this.storageProvider.save(attachment, "exams");

    exam.attachment = attachment;

    await this.examsRepository.updateExam(exam_id, exam);
  }
}

export { UpdateExamAttachmentUseCase };
