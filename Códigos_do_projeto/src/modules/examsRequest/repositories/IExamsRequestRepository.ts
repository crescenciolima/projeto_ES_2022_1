import { ICreateExamRequestDTO } from "../dtos/ICreateExamRequestDTO";
import { IUpdateExamRequestDTO } from "../dtos/IUpdateExamRequestDTO";
import { ExamRequest } from "../infra/typeorm/entities/ExamRequest";

interface IExamsRequestRepository {
  create(data: ICreateExamRequestDTO): Promise<ExamRequest>;
  updateExamRequest(
    id: string,
    data: IUpdateExamRequestDTO
  ): Promise<ExamRequest>;
  delete(id: string): Promise<void>;
  getAll(): Promise<ExamRequest[]>;
  findById(id: string): Promise<ExamRequest>;
}

export { IExamsRequestRepository };
