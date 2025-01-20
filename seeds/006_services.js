/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('services').del();
  await knex('services').insert([
    // Landscaping services
    { service_name: 'Landscape Design Consultation' },
    { service_name: 'Patio Installation' },
    { service_name: 'Irrigation' },
    { service_name: 'Weed Control' },
    { service_name: 'Mulching' },
    { service_name: 'Aeration' },
    { service_name: 'Edging' },
    { service_name: 'Leaf Removal' },
    { service_name: 'Trimming' },
    { service_name: 'Pruning' },
    { service_name: 'Retaining Wall Installation' },
    { service_name: 'Yard Clean-Up' },
    { service_name: 'Artificial Turf Dethatching' },
    { service_name: 'Tree Planting' },
    { service_name: 'Tree Removal' },

    // Home repairs and renovation services
    { service_name: 'Plumbing' },
    { service_name: 'Carpentry' },
    { service_name: 'Drywall' },
    { service_name: 'Electrical' },
    { service_name: 'General Renovation' },
    { service_name: 'Assembling' },
    { service_name: 'Installation' },
    { service_name: 'General Repairs' },
    { service_name: 'Maintenance' },
    { service_name: 'Painting' },
    { service_name: 'Flooring' },

    // Moving and delivery services
    { service_name: 'Local Moving' },
    { service_name: 'Long-Distance Moving' },
    { service_name: 'Full-Service Moving' },
    { service_name: 'Furniture Movers' },

    // Car rental services
    { service_name: 'Luxury Car Rental' },
    { service_name: 'Full-Size Car Rental' },
    { service_name: 'Economy Car Rental' },
    { service_name: 'Compact Car Rental' },
    { service_name: 'Intermediate SUV Rental' },
    { service_name: 'Mini Car Rental' },

    // Interior decoration services
    { service_name: 'Decoration for Special Events' },
    { service_name: 'Office Decoration' },
    { service_name: 'Interior Consulting' },
    { service_name: 'House Staging' },
    { service_name: 'Office Layout' },
    { service_name: 'Interior Lighting' },
    { service_name: 'Artwork and Accessories' },
    { service_name: 'Floor and Window Covering' },
    { service_name: 'Color Palette Selection' },
  ]);
}

