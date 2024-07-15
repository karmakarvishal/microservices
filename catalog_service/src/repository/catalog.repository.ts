import { ICatalogRepository } from "../interface/catalogRepository";
import { Product } from "../models/products.model";

export class CatalogRepository implements ICatalogRepository
{
    create(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    update(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    delete(id: any) {
        throw new Error("Method not implemented.");
    }
    find(data: any): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    findOne(): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    
    
}