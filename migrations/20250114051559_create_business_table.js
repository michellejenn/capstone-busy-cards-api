/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('business', (table) => {
      table.increments('id').primary(); // Auto-incrementing ID
      table.integer('category_id').unsigned().references('category_id').inTable('category').onDelete('CASCADE');
      table.string('business_name').notNullable();
      table.string('email').notNullable();
      table.string('phone_no').notNullable();
      table.text('mission_statement');
      table.string('location').notNullable();
      table.string('linkedin_address');
      table.string('instagram_handle');
      table.boolean('verification_status').defaultTo(false); // Verified or not
      table.decimal('overall_rating', 2, 1).defaultTo(0); // Overall rating capped at 5
      table.text('services_offered'); // List of services offered by the business
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down (knex) {
    return knex.schema.dropTableIfExists('business');
  };
