import { ICreateResidentDTO } from "../dtos/ICreateResidentDTO";
import { IUpdateResidentDTO } from "../dtos/IUpdateResidentDTO";
import { Resident } from "../infra/typeorm/entitites/Resident";

interface IResidentsRepository {
  create(data: ICreateResidentDTO): Promise<Resident>;
  updateResident(id: string, data: IUpdateResidentDTO): Promise<Resident>;
  delete(id: string): Promise<void>;
  getAll(): Promise<Resident[]>;
  findById(id: string): Promise<Resident>;
  findByCpf(cpf: string): Promise<Resident>;
  findByCrm(crm: string): Promise<Resident>;
}

export { IResidentsRepository };
