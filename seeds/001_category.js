/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed (knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    { category_name: 'Landscaping' },
    { category_name: 'Home Repairs and Renovations' },
    { category_name: 'Moving and Delivery' },
    { category_name: 'Car Rentals' },
    { category_name: 'Interior Decoration Services' }
  ]);
};
