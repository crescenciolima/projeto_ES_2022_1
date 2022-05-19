

interface ICreateMedicTokenDTO {
  medic_id: string;
  expires_date: Date;
  refresh_token: string;
}

export { ICreateMedicTokenDTO }