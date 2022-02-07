import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string;
  name: string;
  description: string;
  calories: number;
  price: number;
  quantity: number;
}

class UpdateProductService {
  public async execute({
    id,
    name,
    description,
    calories,
    price,
    quantity,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Produto não encontrado.');
    }

    const productExists = await productsRepository.findByName(name);

    if (productExists && name !== product.name) {
      throw new AppError('Já existe um produto com o mesmo nome!');
    }

    product.name = name;
    product.description;
    product.calories;
    product.price;
    product.quantity;

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
