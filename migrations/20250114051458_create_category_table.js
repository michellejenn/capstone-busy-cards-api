/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up (knex) {
   return knex.schema.createTable('category', (table) => {
      table.increments('category_id').primary(); // Auto-incrementing ID
      table.string('category_name').notNullable(); // Name of the category
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('category');
  };
