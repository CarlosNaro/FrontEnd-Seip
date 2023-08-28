export interface IMProduct {
  id: number;
  name: string;
  description: string;
  date: Date;
  image: string;
}

export interface IFProduct {
  name: string;
  description: string;
  image: string;
}

export interface IProductStore {
  product: IMProduct[] | null;
}
