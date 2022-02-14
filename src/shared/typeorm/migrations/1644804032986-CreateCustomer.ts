import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCustomer1644804032986 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'customer',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'name',
            type: 'varchar',
          },

          {
            name: 'cpf',
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
    await queryRunner.dropTable('customer');
  }
}