import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogService {
  private _repository: ICatalogRepository;

  constructor(repository: ICatalogRepository) {
    this._repository = repository;
  }

  async createProduct(input: any) {
    const data = await this._repository.create(input);
    if (!data.id) {
      throw new Error("unable to create product");
    }
    return data;
  }

  async updateProduct(input: any) {
    const data = await this._repository.update(input);
    // emit event to update record in Elastic search
    // if (!data) {
    //   throw new Error("unable to update product");
    // }
    return data;
  }

  // insted of this get products from elastic search
  async getProducts(limit: number, offset: number) {
    const products = await this._repository.find(limit, offset);
    return products;
  }

  async getProduct(id: number) {
    const product = await this._repository.findOne(id);
    if (!product) {
      throw new Error("product does not exist");
    }
    return product;
  }

  async deleteProduct(id: number) {
    const response = await this._repository.delete(id);
    // delete record from elastic search
    if (!response) {
      throw new Error("product does not exist");
    }
    return response;
  }
}
