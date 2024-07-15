import { Product } from "../models/products.model";

export interface ICatalogRepository {
    create(data: Product): Promise<Product>;
    update(data: Product): Promise<Product>;
    delete(id: any): any;
    find(data: any): Promise<Product[]>;
    findOne(): Promise<Product>;
}