import { ICreateTeacherDTO } from "@modules/teachers/dtos/ICreateTeacherDTO";
import { Teacher } from "@modules/teachers/infra/typeorm/entities/Teacher";
import { ITeachersRepository } from "@modules/teachers/repositories/ITeachersRepository";
import { AppError } from "@shared/errors/AppError";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateTeacherUseCase {
  constructor(
    @inject("TeachersRepository")
    private teachersRepository: ITeachersRepository
  ) {}
  async execute({
    name,
    nationality,
    ethnicity,
    crm,
    cpf,
    titration,
    password,
    marital_status,
    birth_date,
    address,
    city,
    state,
    gender,
    especialization,
    phone_number,
  }: ICreateTeacherDTO): Promise<Teacher> {
    const teacherAlreadyExistsCpf = await this.teachersRepository.findByCpf(
      cpf
    );
    if (teacherAlreadyExistsCpf) {
      throw new AppError("Teacher already exists!");
    }
    const teacherAlreadyExistsCrm = await this.teachersRepository.findByCrm(
      crm
    );
    if (teacherAlreadyExistsCrm) {
      throw new AppError("Teacher already exists!");
    }

    const passwordHash = await hash(password, 8);

    const teacher = await this.teachersRepository.create({
      name,
      nationality,
      ethnicity,
      crm,
      cpf,
      titration,
      password: passwordHash,
      marital_status,
      birth_date,
      address,
      city,
      state,
      gender,
      especialization,
      phone_number,
    });
    return teacher;
  }
}

export { CreateTeacherUseCase };
