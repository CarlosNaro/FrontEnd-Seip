export interface IProfile {
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

export interface IUser {
  id: number;
  is_admin?: boolean;
  username: string;
}

export interface IProfileEdit {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  image?: any;
  user_id: number;
}

export interface userStore {
  profile: IProfile | null;
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
