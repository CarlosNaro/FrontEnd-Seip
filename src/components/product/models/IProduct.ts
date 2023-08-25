export interface IMProduct {
  id: number;
  name: string;
  description: string;
  date: Date;
}

export interface IFProduct {
  name:string,
  description:string 
}


export interface IProductStore {
  product: IMProduct[] | null;
}
