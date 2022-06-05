import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProducts1607437608841 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'nomeRefeicao',
            type: 'varchar',
          },

          {
            name: 'descricaoRefeicao',
            type: 'varchar',
          },

          {
            name: 'calorias',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },

          {
            name: 'valor',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },

          {
            name: 'quantidadeRefeicao',
            type: 'int',
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },

          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
