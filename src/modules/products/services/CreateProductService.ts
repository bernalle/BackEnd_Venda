import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  name: string;
  price: number;
  calories: number;
  quantity: number;
}

class CreateProductService {
  public async execute({
    name,
    price,
    calories,
    quantity,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new AppError('Já existe um produto com o mesmo nome!');
    }

    const product = productsRepository.create({
      name,
      price,
      calories,
      quantity,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
