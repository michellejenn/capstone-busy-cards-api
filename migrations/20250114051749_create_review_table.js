/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('review', (table) => {
      table.increments('review_id').primary(); // Auto-incrementing ID
      table.integer('business_id').unsigned().references('id').inTable('business').onDelete('CASCADE');
      table.integer('user_id').unsigned().references('user_id').inTable('users').onDelete('CASCADE');
      table.text('review_text'); // Review content
      table.decimal('value_for_money', 2, 1).notNullable().checkBetween([1, 5]); // Rating 1-5
      table.decimal('trust_reliability', 2, 1).notNullable().checkBetween([1, 5]);
      table.decimal('attention_to_details', 2, 1).notNullable().checkBetween([1, 5]);
      table.decimal('perceived_worth', 2, 1).notNullable().checkBetween([1, 5]);
      table.decimal('timeliness', 2, 1).notNullable().checkBetween([1, 5]);
      table.decimal('professionalism', 2, 1).notNullable().checkBetween([1, 5]);
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('review');
  };
