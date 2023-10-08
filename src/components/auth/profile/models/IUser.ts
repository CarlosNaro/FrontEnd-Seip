export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  image: any;
  is_active: boolean;
  is_admin: boolean;
  user_id: number;
  // is_superuser: boolean;
  // last_login: string;
  // date_joined: string;
  // "groups": [],
  // "user_permissions": []
}

export interface IUserEdit {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  image: any;
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

export interface IChangePassword {
  current_password?: string;
  new_password?: string;
  confirm_password?: string;
}
