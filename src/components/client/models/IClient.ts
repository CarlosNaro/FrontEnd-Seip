export interface IMClient {
  id: number;
  name: string;
  document: Number;
  description: string;
  phone: Number;
  date: Date;
}

export interface IFClient {
  name: string;
  document?: number | null;
  description?: string;
  phone?: number | null;
}

export interface IFClientEdit {
  id: number;
  name: string;
  document?: number | null;
  description?: string;
  phone?: number | null;
}

export interface IMClientStore {
  client: IMClient[] | null;
}
