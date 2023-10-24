export interface ILogin {
  username: string;
  password: string;
}

export interface IUserLogin {
  id: number;
  is_staff: boolean;
  username: string;
}

export interface IAuthStore {
  user: IUserLogin | null;
  token: string | null;
}
