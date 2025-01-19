/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('services', (table) => {
      table.increments('id').primary();
      table.string('service_name').notNullable();
      table.text('description');
      table.timestamps(true, true);
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export async function down(knex) {
    return knex.schema.dropTable('services');
  }
  