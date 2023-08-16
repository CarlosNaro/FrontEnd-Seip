export interface IUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_login: string;
  date_joined: string;
  // "groups": [],
  // "user_permissions": []
}

export interface IUserUpdate {
  id: number;
  username: string;
  first_name?: string;
  last_name?: string;
  email: string;
}

export interface userStore {
  user: IUser | null;
}

export interface IJwtDecode {
  token_type: string;
  exp: number;
  jti: string;
  user_id: number;
}
