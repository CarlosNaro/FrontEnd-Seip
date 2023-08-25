export interface IMProduct {
  id: number;
  name: string;
  description: string;
  date: Date;
}

export interface IProductStore {
  product: IMProduct[] | null;
}
