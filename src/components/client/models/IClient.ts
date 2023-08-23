export interface IMClient {
  id: number;
  name: string;
  document: number;
  description: string;
  phone: number;
  date: number;
}

export interface IFClient {
  name: string;
  document?: string;
  description?: string;
  phone?: string;
}

export interface IFClientEdit {
  id?: number;
  name?: string;
  document?: number;
  description?: string;
  phone?: number;
}

export interface IMClientStore {
  client: IMClient[] | null;
}
