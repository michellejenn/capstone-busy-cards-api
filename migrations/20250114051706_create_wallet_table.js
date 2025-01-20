/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up (knex) {
   return knex.schema.createTable('wallet', (table) => {
      table.increments('wallet_id').primary(); // Auto-incrementing ID
      table.integer('user_id').unsigned().references('user_id').inTable('users').onDelete('CASCADE');
      table.integer('business_id').unsigned().references('id').inTable('business').onDelete('CASCADE');
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down (knex) {
    return knex.schema.dropTableIfExists('wallet');
  };
