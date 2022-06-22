import { inject, injectable } from "tsyringe";
import { Teacher } from "@modules/teachers/infra/typeorm/entities/Teacher";
import { ITeachersRepository } from "@modules/teachers/repositories/ITeachersRepository";
import { IUpdateTeacherDTO } from "@modules/teachers/dtos/IUpdateTeacherDTO";
import { hash } from "bcrypt";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateTeacherUseCase {
  constructor(
    @inject("TeachersRepository")
    private teachersRepository: ITeachersRepository
  ) {}

  async execute(id: string, data: IUpdateTeacherDTO): Promise<Teacher> {
    const teacher = await this.teachersRepository.findById(id);
    const passwordHash = await hash(data.password, 8);

    const teacherAlreadyExistsCpf = await this.teachersRepository.findByCpf(
      data.cpf
    );
    if (teacherAlreadyExistsCpf) {
      throw new AppError("Teacher already exists!");
    }
    const teacherAlreadyExistsCrm = await this.teachersRepository.findByCrm(
      data.crm
    );
    if (teacherAlreadyExistsCrm) {
      throw new AppError("Teacher already exists!");
    }

    if (!teacher) {
      throw new AppError("Teacher does not exists!");
    }

    data = {
      id: id,
      name: data?.name,
      ethnicity: data?.ethnicity,
      nationality: data?.nationality,
      crm: data?.crm,
      cpf: data?.cpf,
      titration: data?.titration,
      password: passwordHash,
      marital_status: data?.marital_status,
      birth_date: data?.birth_date,
      address: data?.address,
      city: data?.city,
      state: data?.state,
      gender: data?.gender,
      especialization: data?.especialization,
      phone_number: data?.phone_number,
    };

    await this.teachersRepository.updateTeacher(id, data);
    return teacher;
  }
}

export { UpdateTeacherUseCase };
