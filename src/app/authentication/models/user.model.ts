export interface Register {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export type LoginData = {email: string; password:string}

export type RegisterResponse = Omit<Register, "password"> & {_id: string}
