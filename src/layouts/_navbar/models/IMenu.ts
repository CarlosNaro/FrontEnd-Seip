export interface IMenu {
  icon: string;
  label: string;
  to: string;
}

export interface IMenuNavbar {
  to: string;
  icon: string;
  label: string;
  isCurrentUser: boolean;
  isDesktopNoLabel: boolean;
  menu: IMenu[] | null;
}
