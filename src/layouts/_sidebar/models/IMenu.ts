export interface IMeta {
  title: string;
  auth: boolean;
  isAdmin?: boolean;
}

export interface IMenu {
  name: string;
  path: string;
  icon?: string;
  isLogout?: boolean;
}

export interface IMenuSidebar {
  sidebar: IMenu[] | null;
  isLogout?: boolean;
}

export interface IMenuStore {
  item: IMenu[] | null;
}
