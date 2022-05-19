import { ICreatePatientDTO } from "@modules/patients/dtos/ICreatePatientDTO";
import { IUpdatePatientDTO } from "@modules/patients/dtos/IUpdatePatientDTO";
import { Patient } from "@modules/patients/infra/typeorm/entities/Patient";
import { IPatientsRepository } from "../IPatientsRepository";


class PatientsRepositoryInMemory implements IPatientsRepository {
  patients: Patient[] = []

  async create({ name, ethnicity, nationality, cpf, birth_date, marital_status, address, state, city, gender, phone_number, id }: ICreatePatientDTO): Promise<Patient> {
    const patient = new Patient()

    Object.assign(patient, {
      name,
      ethnicity,
      nationality,
      cpf,
      birth_date,
      marital_status,
      address,
      state,
      city,
      gender,
      phone_number,
      id
    })
    this.patients.push(patient)
    return patient
  }
  updatePatient(id: string, data: IUpdatePatientDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async getAll(): Promise<Patient[]> {
    const list = this.patients;
    return list;
  }
  async findById(id: string): Promise<Patient> {
    return this.patients.find((patient) => patient.id === id)
  }
  async findByCpf(cpf: string): Promise<Patient> {
    return this.patients.find(patient => patient.cpf === cpf)
  }

}

export { PatientsRepositoryInMemory }