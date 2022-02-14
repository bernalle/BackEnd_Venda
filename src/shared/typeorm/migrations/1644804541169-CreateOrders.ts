import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrders1644804541169 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'increment',
          },

          {
            name: 'customerName',
            type: 'varchar',
          },

          {
            name: 'customerCpf',
            type: 'int',
          },

          {
            name: 'adressCep',
            type: 'int',
          },

          {
            name: 'adressLougradouro',
            type: 'varchar',
          },

          {
            name: 'addressNumero',
            type: 'int',
          },

          {
            name: 'adressComplemento',
            type: 'varchar',
          },

          {
            name: 'formaPagamento',
            type: 'int',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
