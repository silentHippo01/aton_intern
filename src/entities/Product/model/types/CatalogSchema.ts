export interface IProduct { 
    id: number;
    title: string;
    category: string;
    cost: string;
}

export interface CatalogSchema{
    catalog?: IProduct[];
}