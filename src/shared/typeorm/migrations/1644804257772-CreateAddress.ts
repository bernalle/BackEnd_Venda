import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAddress1644804257772 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'adress',
        columns: [
          {
            name: 'cep',
            type: 'int',
          },

          {
            name: 'lougradouro',
            type: 'varchar',
          },

          {
            name: 'numero',
            type: 'int',
          },

          {
            name: 'complemento',
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
    await queryRunner.dropTable('adress');
  }
}
