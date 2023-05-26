export interface IUser{
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    is_staff: boolean
    is_active: boolean
}

export interface IAuthStore {
    user: IUser | null
    // token: string | null
    // person: IPerson | null
    // groups: IGroup[] | null
   }