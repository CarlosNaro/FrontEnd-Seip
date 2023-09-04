export interface IMProduct {
  id: number;
  name: string;
  description: string;
  date: Date;
  image: string;
  isDelete: boolean;
}

export interface IFProduct {
  name: string;
  description?: string;
  image?: any | null;
}

export interface IFProductEdit {
  id: number;
  name: string;
  description?: string;
  image?: any | null;
}

export interface IProductStore {
  product: IMProduct[] | null;
}
