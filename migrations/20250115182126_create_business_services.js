/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('business_services', (table) => {
      table.increments('id').primary(); // Auto-incrementing ID
      table.integer('business_id').unsigned().references('id').inTable('business').onDelete('CASCADE'); // FK to business
      table.integer('service_id').unsigned().references('id').inTable('services').onDelete('CASCADE'); // FK to services
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTableIfExists('business_services');
  }
  