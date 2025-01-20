/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      name: 'Michelle Okeke', // The user's name
      email: 'mokeke706@gmail.com', // The user's email (ensure this matches the unique constraint)
      password: 'hashedpassword123' // A hashed password (replace with actual hash during implementation)
    }
  ]);
  

};


