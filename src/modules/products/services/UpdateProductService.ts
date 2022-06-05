import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string;
  nomeRefeicao: string;
  descricaoRefeicao: string;
  calorias: number;
  valor: number;
  quantidadeRefeicao: number;
}

class UpdateProductService {
  public async execute({
    id,
    nomeRefeicao,
    descricaoRefeicao,
    calorias,
    valor,
    quantidadeRefeicao,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Produto não encontrado.');
    }

    const productExists = await productsRepository.findByName(nomeRefeicao);

    if (productExists && nomeRefeicao !== product.nomeRefeicao) {
      throw new AppError('Já existe um produto com o mesmo nome!');
    }

    product.nomeRefeicao = nomeRefeicao;
    product.descricaoRefeicao;
    product.calorias;
    product.valor;
    product.quantidadeRefeicao;

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
