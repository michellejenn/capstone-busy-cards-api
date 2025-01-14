/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('review').del();
  await knex('review').insert([
    {
      business_id: 1, // GreenThumb Landscaping
      user_id: 1, // Assuming user_id = 1
      review_text: 'Excellent landscaping service! The garden looks fantastic and the team was very professional.',
      value_for_money: 4.5,
      trust_reliability: 4.8,
      attention_to_details: 4.7,
      perceived_worth: 4.6,
      timeliness: 4.9,
      professionalism: 5.0
    },
    {
      business_id: 2, // Urban Gardens
      user_id: 1,
      review_text: 'Great service, but a little slow. The design was beautiful, and the staff were helpful.',
      value_for_money: 4.0,
      trust_reliability: 4.2,
      attention_to_details: 4.5,
      perceived_worth: 4.3,
      timeliness: 3.8,
      professionalism: 4.4
    },
    {
      business_id: 3, // Blooming Landscapes
      user_id: 1,
      review_text: 'The team did an amazing job with our backyard. They were punctual and finished ahead of schedule.',
      value_for_money: 5.0,
      trust_reliability: 5.0,
      attention_to_details: 5.0,
      perceived_worth: 5.0,
      timeliness: 5.0,
      professionalism: 5.0
    },
    {
      business_id: 4, // Nature’s Touch
      user_id: 1,
      review_text: 'Nice team, but a few plants didn’t make it. I would still recommend their services.',
      value_for_money: 3.9,
      trust_reliability: 4.0,
      attention_to_details: 4.2,
      perceived_worth: 3.8,
      timeliness: 4.3,
      professionalism: 4.1
    },
    {
      business_id: 5, // Lush Landscapes
      user_id: 1,
      review_text: 'Affordable services with good results. Would definitely consider them for future projects.',
      value_for_money: 4.2,
      trust_reliability: 4.3,
      attention_to_details: 4.4,
      perceived_worth: 4.5,
      timeliness: 4.0,
      professionalism: 4.3
    },
  
    {
      business_id: 6, // FixIt All Renovations
      user_id: 1,
      review_text: 'Great work on our kitchen renovation! The team was professional, and the result exceeded expectations.',
      value_for_money: 4.8,
      trust_reliability: 4.9,
      attention_to_details: 4.7,
      perceived_worth: 4.9,
      timeliness: 4.9,
      professionalism: 5.0
    },
    {
      business_id: 7, // Next Level Renovations
      user_id: 1,
      review_text: 'The project took longer than expected, but the quality of work was worth the wait.',
      value_for_money: 4.2,
      trust_reliability: 4.3,
      attention_to_details: 4.6,
      perceived_worth: 4.4,
      timeliness: 3.8,
      professionalism: 4.5
    },
    {
      business_id: 8, // Elite Home Renovators
      user_id: 1,
      review_text: 'Very efficient team! They finished our renovation quickly and professionally.',
      value_for_money: 5.0,
      trust_reliability: 5.0,
      attention_to_details: 5.0,
      perceived_worth: 5.0,
      timeliness: 5.0,
      professionalism: 5.0
    },
    {
      business_id: 9, // Total Home Makeovers
      user_id: 1,
      review_text: 'The bathroom makeover was beautiful, but there were some issues with communication.',
      value_for_money: 4.3,
      trust_reliability: 4.2,
      attention_to_details: 4.5,
      perceived_worth: 4.3,
      timeliness: 4.0,
      professionalism: 4.4
    },
    {
      business_id: 10, // House Smart Renovations
      user_id: 1, // Assuming user_id = 1
      review_text: 'Affordable and great service. Would hire again in the future.',
      value_for_money: 4.6,
      trust_reliability: 4.7,
      attention_to_details: 4.5,
      perceived_worth: 4.7,
      timeliness: 4.8,
      professionalism: 4.9
    },
    {
      business_id: 11, // Speedy Movers
      user_id: 1,
      review_text: 'Quick and efficient movers. Everything arrived safely. Highly recommend!',
      value_for_money: 5.0,
      trust_reliability: 5.0,
      attention_to_details: 5.0,
      perceived_worth: 5.0,
      timeliness: 5.0,
      professionalism: 5.0
    },
    {
      business_id: 12, // FastTrack Delivery
      user_id: 1,
      review_text: 'Good service, but a bit expensive. Delivery was on time and the items were handled well.',
      value_for_money: 4.1,
      trust_reliability: 4.4,
      attention_to_details: 4.2,
      perceived_worth: 4.3,
      timeliness: 4.5,
      professionalism: 4.4
    },
    {
      business_id: 13, // Move-It Now
      user_id: 1,
      review_text: 'The moving team was friendly and handled everything with care. Will use again in the future.',
      value_for_money: 4.8,
      trust_reliability: 4.9,
      attention_to_details: 4.7,
      perceived_worth: 4.9,
      timeliness: 5.0,
      professionalism: 4.9
    },
    {
      business_id: 14, // Relocation Pros
      user_id: 1,
      review_text: 'They were thorough, but the job took longer than expected. Otherwise, great service.',
      value_for_money: 4.3,
      trust_reliability: 4.5,
      attention_to_details: 4.6,
      perceived_worth: 4.4,
      timeliness: 3.9,
      professionalism: 4.6
    },
    {
      business_id: 15, // Rent-A-Car Express
      user_id: 1,
      review_text: 'Affordable rentals with a wide range of cars. Great customer service.',
      value_for_money: 4.6,
      trust_reliability: 4.7,
      attention_to_details: 4.5,
      perceived_worth: 4.6,
      timeliness: 4.7,
      professionalism: 4.8
    },
    {
      business_id: 16, // QuickRent Cars
      user_id: 1,
      review_text: 'Easy booking process and great condition cars. The staff were friendly and helpful.',
      value_for_money: 4.9,
      trust_reliability: 5.0,
      attention_to_details: 4.8,
      perceived_worth: 4.9,
      timeliness: 5.0,
      professionalism: 4.9
    },
    {
      business_id: 17, // DriveNow Car Rentals
      user_id: 1,
      review_text: 'Very professional, but the car I rented had some maintenance issues. Would rent again though.',
      value_for_money: 4.0,
      trust_reliability: 4.2,
      attention_to_details: 4.1,
      perceived_worth: 4.2,
      timeliness: 4.5,
      professionalism: 4.4
    },
    {
      business_id: 18, // Prestige Car Rentals
      user_id: 1,
      review_text: 'Great experience overall. The car was in perfect condition and the process was seamless.',
      value_for_money: 5.0,
      trust_reliability: 5.0,
      attention_to_details: 5.0,
      perceived_worth: 5.0,
      timeliness: 5.0,
      professionalism: 5.0
    },
    {
      business_id: 19, // Modern Interiors
      user_id: 1,
      review_text: 'Amazing interior decoration services. The team transformed our space beautifully!',
      value_for_money: 4.7,
      trust_reliability: 4.8,
      attention_to_details: 5.0,
      perceived_worth: 4.9,
      timeliness: 4.7,
      professionalism: 5.0
    },
    {
      business_id: 20,  // Chic Interiors
      user_id: 1,  // Assuming user_id = 1
      review_text: 'The design was fabulous, but I wish the delivery of some items had been quicker.',
      value_for_money: 4.4,
      trust_reliability: 4.6,
      attention_to_details: 4.5,
      perceived_worth: 4.7,
      timeliness: 4.1,
      professionalism: 4.8
    },
    {
      business_id: 21,  // Luxe Decorators
      user_id: 1,
      review_text: 'Exceptional service, but the pricing was on the higher end. Still worth it for the outcome.',
      value_for_money: 4.2,
      trust_reliability: 4.3,
      attention_to_details: 4.6,
      perceived_worth: 4.5,
      timeliness: 4.0,
      professionalism: 5.0
    },
    {
      business_id: 22,  // Elegant Spaces
      user_id: 1,
      review_text: 'Very professional team! The result was beautiful and the design fit perfectly with our style.',
      value_for_money: 4.9,
      trust_reliability: 5.0,
      attention_to_details: 5.0,
      perceived_worth: 5.0,
      timeliness: 5.0,
      professionalism: 5.0
    },
    {
      business_id: 23,  // Urban Designs
      user_id: 1,
      review_text: 'The design was lovely but could have been a bit more creative. Overall, happy with the service.',
      value_for_money: 4.3,
      trust_reliability: 4.4,
      attention_to_details: 4.2,
      perceived_worth: 4.3,
      timeliness: 4.5,
      professionalism: 4.7
    },
    {
      business_id: 24,  // Bright Ideas Interiors
      user_id: 1,
      review_text: 'Great interior services with a good eye for design. Would work with them again in the future.',
      value_for_money: 4.6,
      trust_reliability: 4.8,
      attention_to_details: 4.7,
      perceived_worth: 4.8,
      timeliness: 4.6,
      professionalism: 4.9
    }
  ]);
  
};
