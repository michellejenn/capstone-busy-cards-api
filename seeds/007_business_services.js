/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */



export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('business_services').del()

  // Insert entries
  await knex('business_services').insert([
    // GreenThumb Landscaping services
    { business_id: 1, service_id: 1 }, // Garden design
    { business_id: 1, service_id: 2 }, // Lawn maintenance
    { business_id: 1, service_id: 3 }, // Landscape design
    { business_id: 1, service_id: 4 }, // Lawn care
    { business_id: 1, service_id: 14 }, // Tree planting
    { business_id: 1, service_id: 15 }, // Garden design
    { business_id: 1, service_id: 5}, // Lawn maintenance
    { business_id: 1, service_id: 7 }, // Landscape design
    { business_id: 1, service_id: 8 }, // Lawn care
    { business_id: 1, service_id: 9 }, // Tree planting

    // Urban Gardens services
    { business_id: 2, service_id: 3 }, // Landscape design
    { business_id: 2, service_id: 4 }, // Lawn care
    { business_id: 2, service_id: 5 }, // Mulching
    { business_id: 2, service_id: 6 }, // Planting
    { business_id: 2, service_id: 7 }, // Irrigation
    { business_id: 2, service_id: 15 }, // Landscape design
    { business_id: 2, service_id: 14}, // Lawn care
    { business_id: 2, service_id: 8 }, // Mulching
    { business_id: 2, service_id: 1 }, // Planting
    { business_id: 2, service_id: 2 }, // Irrigation

    // Blooming Landscapes services
    { business_id: 3, service_id: 6 }, // Planting
    { business_id: 3, service_id: 7 }, // Irrigation
    { business_id: 3, service_id: 8 }, // Hardscaping
    { business_id: 3, service_id: 9 }, // Shrub trimming
    { business_id: 3, service_id: 1 }, // Planting
    { business_id: 3, service_id: 2 }, // Irrigation
    { business_id: 3, service_id: 13 }, // Hardscaping
    { business_id: 3, service_id: 11 }, // Shrub trimming

    // Nature’s Touch services
    { business_id: 4, service_id: 1 }, // Garden design
    { business_id: 4, service_id: 4 }, // Lawn care
    { business_id: 4, service_id: 9 }, // Shrub trimming
    { business_id: 4, service_id: 15 }, // Garden maintenance
    { business_id: 4, service_id: 2 }, // Garden design
    { business_id: 4, service_id: 3 }, // Lawn care
    { business_id: 4, service_id: 5 }, // Shrub trimming
    { business_id: 4, service_id: 12 }, // Garden maintenance

    // Lush Landscapes services
    { business_id: 5, service_id: 4 }, // Lawn care
    { business_id: 5, service_id: 14 }, // Tree planting
    { business_id: 5, service_id: 15 }, // Garden maintenance
    { business_id: 5, service_id: 2 }, // Lawn maintenance
    { business_id: 5, service_id: 8 }, // Hardscaping
    { business_id: 5, service_id: 11 }, // Lawn care
    { business_id: 5, service_id: 10 }, // Tree planting
    { business_id: 5, service_id: 12 }, // Garden maintenance
    { business_id: 5, service_id: 13 }, // Lawn maintenance
    { business_id: 5, service_id: 1 }, // Hardscaping

    // FixIt All Renovations services
    { business_id: 6, service_id: 16 }, // General home repairs
    { business_id: 6, service_id: 17 }, // Kitchen remodel
    { business_id: 6, service_id: 18 }, // Bathroom renovations
    { business_id: 6, service_id: 24 }, // Drywall installation
    { business_id: 6, service_id: 22 }, // Roofing
    { business_id: 6, service_id: 26 }, // General home repairs
    { business_id: 6, service_id: 18 }, // Kitchen remodel
    { business_id: 6, service_id: 19 }, // Bathroom renovations
    { business_id: 6, service_id: 20 }, // Drywall installation
    { business_id: 6, service_id: 21 }, // Roofing

    // Next Level Renovations services
    { business_id: 7, service_id: 19 }, // Home addition
    { business_id: 7, service_id: 20 }, // Basement finishing
    { business_id: 7, service_id: 21 }, // Flooring
    { business_id: 7, service_id: 23 }, // Electrical work
    { business_id: 7, service_id: 25 }, // Painting
    { business_id: 7, service_id: 16 }, // Home addition
    { business_id: 7, service_id: 17 }, // Basement finishing
    { business_id: 7, service_id: 18 }, // Flooring
    { business_id: 7, service_id: 26 }, // Electrical work
    { business_id: 7, service_id: 24 }, // Painting

    // Elite Home Renovators services
    { business_id: 8, service_id: 16 }, // General renovations
    { business_id: 8, service_id: 22 }, // Roofing
    { business_id: 8, service_id: 23 }, // Electrical work
    { business_id: 8, service_id: 17 }, // Kitchen remodel
    { business_id: 8, service_id: 18 }, // Bathroom renovations
    { business_id: 8, service_id: 18 }, // General renovations
    { business_id: 8, service_id: 24 }, // Roofing
    { business_id: 8, service_id: 25 }, // Electrical work
   

    // Total Home Makeovers services
    { business_id: 9, service_id: 17 }, // Kitchen remodel
    { business_id: 9, service_id: 18 }, // Bathroom upgrade
    { business_id: 9, service_id: 24 }, // Drywall installation
    { business_id: 9, service_id: 16 }, // Home repairs
    { business_id: 9, service_id: 25 }, // Painting

    // House Smart Renovations services
    { business_id: 10, service_id: 16 }, // Home repairs
    { business_id: 10, service_id: 25 }, // Painting
    { business_id: 10, service_id: 26 }, // Custom cabinetry
    { business_id: 10, service_id: 19 }, // Home addition
    { business_id: 10, service_id: 21 }, // Flooring
    { business_id: 10, service_id: 17 }, // Home addition
    { business_id: 10, service_id: 22 }, // Flooring

    // QuickMove services
    { business_id: 11, service_id: 27 }, // Residential moving
    { business_id: 11, service_id: 28 }, // Office relocation
    { business_id: 11, service_id: 29 }, // Furniture delivery
    { business_id: 11, service_id: 30 }, // Packing
    // { business_id: 11, service_id: 32 }, // Long distance moving

    // Pack and Go Movers services
    { business_id: 12, service_id: 27 }, // Packing
    { business_id: 12, service_id: 28 }, // Furniture delivery
    { business_id: 12, service_id: 29 }, // Small moves

    // OnTime Moving services
    { business_id: 13, service_id: 27 }, // Long distance moving
    { business_id: 13, service_id: 28}, // Local moving
    { business_id: 13, service_id: 29 }, // Heavy lifting
    { business_id: 13, service_id: 30 }, // Residential moving
    

    // Smooth Relocation services
    { business_id: 14, service_id: 27 }, // Office moves
    { business_id: 14, service_id: 28 }, // Apartment relocation
    { business_id: 14, service_id: 29 }, // Vehicle transportation
    { business_id: 14, service_id: 30 }, // Short-distance moving
    

    // Swift Movers services
    { business_id: 15, service_id: 27 }, // Furniture delivery
    { business_id: 15, service_id: 28 }, // Packing

    // DriveEasy Rentals services
    { business_id: 16, service_id: 31 }, // Car rentals
    { business_id: 16, service_id: 32 }, // SUV rentals
    { business_id: 16, service_id: 33 }, // Luxury vehicle rentals
    { business_id: 16, service_id: 34 }, // Van rentals
    { business_id: 16, service_id: 35 }, // Car delivery
    { business_id: 16, service_id: 36 }, // Car delivery

    // FastRent Cars services
    { business_id: 17, service_id: 32 }, // Compact car rentals
    { business_id: 17, service_id: 31 }, // Van rentals
    { business_id: 17, service_id: 33 }, // Car delivery
  

    // GoCar Rentals services
    { business_id: 18, service_id: 31 }, // Convertible rentals
    { business_id: 18, service_id: 32 }, // Family car rentals
    { business_id: 18, service_id: 33 }, // Long-term rentals
    { business_id: 18, service_id: 34 }, // Car rentals
   

    // Elite Auto Rentals services
    { business_id: 19, service_id: 31 }, // Luxury car rentals
    { business_id: 19, service_id: 32 }, // Sedan rentals
    { business_id: 19, service_id: 33 }, // Exotic car rentals
    { business_id: 19, service_id: 34 }, // Van rentals
    { business_id: 19, service_id: 35 }, // Car delivery

    // Affordable Ride Rentals services
    { business_id: 20, service_id: 31 }, // Economy car rentals
   

    // Decor Magic services
    { business_id: 21, service_id: 37 }, // Interior design
    { business_id: 21, service_id: 38 }, // Furniture selection
    { business_id: 21, service_id: 39 }, // Lighting design
    { business_id: 21, service_id: 40 }, // Home staging
    { business_id: 21, service_id: 41 }, // Space planning
    { business_id: 21, service_id: 42 }, // Lighting design
    { business_id: 21, service_id: 43 }, // Home staging
    { business_id: 21, service_id: 44 }, // Space planning

    // Home Harmony services
    { business_id: 22, service_id: 38 }, // Home staging
    { business_id: 22, service_id: 37 }, // Space planning
    { business_id: 22, service_id: 39 }, // Wall art selection
    { business_id: 22, service_id: 40 }, // Furniture selection
    { business_id: 22, service_id: 41 }, // Lighting design
    { business_id: 22, service_id: 42 }, // Wall art selection
 

    // Urban Chic Interiors services
    { business_id: 23, service_id: 37 }, // Color consultation
    { business_id: 23, service_id: 38 }, // Custom furniture
    { business_id: 23, service_id: 39 }, // Window treatments
    { business_id: 23, service_id: 40 }, // Wall art selection
    { business_id: 23, service_id: 41 }, // Home staging

    // Elegant Interiors services
    { business_id: 24, service_id: 45 }, // Interior design
    { business_id: 24, service_id: 44 }, // Home makeovers
    { business_id: 24, service_id: 43}, // Vintage furnishings
    { business_id: 24, service_id: 42 }, // Color consultation
    { business_id: 24, service_id: 37 }, // Window treatments
    { business_id: 24, service_id: 36 }, // Interior design
    { business_id: 24, service_id: 41 }, // Home makeovers
    { business_id: 24, service_id: 38}, // Vintage furnishings
    { business_id: 24, service_id: 39 }, // Color consultation
    { business_id: 24, service_id: 40 }, // Window treatments

    // Modern Living Interiors services
   
    { business_id: 25, service_id: 37 }, // Smart home installations
    { business_id: 25, service_id: 38 }, // Lighting solutions
    { business_id: 25, service_id: 39 }, // Interior design
    { business_id: 25, service_id: 40 }, // Home makeovers
    { business_id: 25, service_id: 41 }, // Minimalist design
    { business_id: 25, service_id: 42 }, // Smart home installations
    { business_id: 25, service_id: 43 }, // Lighting solutions
    { business_id: 25, service_id: 44 }, // Interior design
    { business_id: 25, service_id: 45 }, // Home makeovers
 
  ]);
}
