import { ICatalogRepository } from "../interface/catalogRepository";

export class CatalogService {


    private _repository;
    constructor(repository: ICatalogRepository) {
        this._repository = repository;
    }

    createProduct(input: any) {

    }

    updateProduct(input: any) {

    }

    getProducts(limit: number, offset: number) {

    }

    getProduct(id: number) {

    }

    deleteProduct(id: number) {

    }
}