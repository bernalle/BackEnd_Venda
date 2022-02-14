import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity('adress')
class Adress {
  @Column('int')
  cep: number;

  @Column()
  lougradouro: string;

  @Column('int')
  numero: number;

  @Column()
  complemento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Adress;
