import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nomeRefeicao: string;

  @Column()
  descricaoRefeicao: string;

  @Column('decimal')
  calorias: number;

  @Column('decimal')
  valor: number;

  @Column('int')
  quantidadeRefeicao: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Product;
