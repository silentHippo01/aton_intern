
export interface IProduct { 
    title: string;
    category: string;
    cost: string;
}

export interface CatalogSchema{
    catalog?: IProduct[];
}