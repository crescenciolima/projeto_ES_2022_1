import { IUpdateResidentDTO } from "@modules/residents/dtos/IUpdateResidentDTO";
import { IResidentsRepository } from "@modules/residents/repositories/IResidentsRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { Resident } from "@modules/residents/infra/typeorm/entities/Resident";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateResidentUseCase {
  constructor(
    @inject("ResidentsRepository")
    private residentsRepository: IResidentsRepository
  ) {}

  async execute(id: string, data: IUpdateResidentDTO): Promise<Resident> {
    const resident = await this.residentsRepository.findById(id);
    const passwordHash = await hash(data.password, 8);

    const residentAlreadyExistsCpf = await this.residentsRepository.findByCpf(
      data.cpf
    );
    if (residentAlreadyExistsCpf) {
      throw new AppError("Resident already exists!");
    }
    const residentAlreadyExistsCrm = await this.residentsRepository.findByCrm(
      data.crm
    );
    if (residentAlreadyExistsCrm) {
      throw new AppError("Resident already exists!");
    }

    if (!resident) {
      throw new AppError("Resident does not exists!");
    }

    data = {
      id: id,
      name: data?.name,
      ethnicity: data?.ethnicity,
      nationality: data?.nationality,
      crm: data?.crm,
      cpf: data?.cpf,
      residence_date: data?.residence_date,
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

    await this.residentsRepository.updateResident(id, data);
    return resident;
  }
}

export { UpdateResidentUseCase };
