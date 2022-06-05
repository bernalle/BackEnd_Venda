import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  nomeRefeicao: string;
  descricaoRefeicao: string;
  calorias: number;
  valor: number;
  quantidadeRefeicao: number;
}

class CreateProductService {
  public async execute({
    nomeRefeicao,
    descricaoRefeicao,
    calorias,
    valor,
    quantidadeRefeicao,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const productExists = await productsRepository.findByName(nomeRefeicao);

    if (productExists) {
      throw new AppError('Já existe um produto com o mesmo nome!');
    }

    const product = productsRepository.create({
      nomeRefeicao,
      descricaoRefeicao,
      calorias,
      valor,
      quantidadeRefeicao,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
