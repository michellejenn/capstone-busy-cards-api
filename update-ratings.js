import initKnex from "knex";
import configuration from "./knexfile.js";
const knex = initKnex(configuration);



async function updateRatings() {
  try {
    // Step 1: Update the average_rating for all existing reviews
    await knex('review')
      .update({
        average_rating: knex.raw(`
          (value_for_money + trust_reliability + attention_to_details + perceived_worth + timeliness + professionalism) / 6
        `),
      });

    console.log('Existing reviews updated with average_rating.');

    // Step 2: Get the average of the reviews for each business
    const businessRatings = await knex('review')
      .select('business_id')
      .avg('average_rating as overall_rating')
      .groupBy('business_id');

    // Step 3: Update the overall_rating for each business based on the calculated averages
    for (const { business_id, overall_rating } of businessRatings) {
      await knex('business')
        .where('id', business_id)
        .update({ overall_rating });
    }

    console.log('Business overall ratings updated.');
  } catch (err) {
    console.error('Error updating ratings:', err);
  } finally {
    // Close the connection
    knex.destroy();
  }
}

// Run the update process
updateRatings();
