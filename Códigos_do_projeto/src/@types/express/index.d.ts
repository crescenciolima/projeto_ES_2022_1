declare namespace Express {
  export interface Request {
    medic: {
      id: string;
    };
    exam: {
      id: string;
    };
  }
}
