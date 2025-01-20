import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getAllBusinesses = async (req, res) => {
  try {
    const businesses = await knex('business')
      .select('*');
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ error: "Error fetching businesses"  });
  }
};
const getBusinessesByCategory = async (req, res) => {
    const { id } = req.params;
    try {
      const businesses = await knex('business')
        .where('category_id', id)
        .select('*');
      res.status(200).json(businesses);
    } catch (error) {
      res.status(500).json({ error: `Error fetching businesses in category ${id}` });
    }
  };

//GET/categories

const getCategories = async (req, res) => {
  try {
    const categories = await knex('category')
    .select('*');
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: `Error fetching categories': ${error}` });
  }
};

const getAllServices = async (req, res) =>
{
  try{
    const services = await knex('services')
    .select('services.id', 'services.service_name');
    res.status(200).json({ services });
  }
  catch(error){
    console.error("Error fetching services:", error.message);
    res.status(500).json({ message: "Failed to retrieve services" });
  }
}

const getBusinessDetails = async (req, res) =>{
  const {id} = req.params;
  try{
    const business = await knex('business').where({ id }).first();

    if (business) {
      res.status(200).json({ business });
    } else {
      res.status(404).json({ message: "Business not found" });
    }
  }
  catch(error){
    console.error("Error fetching business details:", error.message);
    res.status(500).json({ message: "Failed to retrieve business details" });
  }
}

const getServicesByBusiness = async (req,res) => {
  const {id } = req.params;

  try{
    const business = await knex('business').where ({id}).first();
    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }
    const services = await knex('services')
      .join('business_services', 'services.id', '=', 'business_services.service_id')
      .where('business_services.business_id', id)
      .select('services.id', 'services.service_name');
    
      res.status(200).json({services});
  }
  catch(error){
    console.error("Error fetching services for the business:", error.message);
    res.status(500).json({ message: "Failed to retrieve services for the business" });
  }
};

const addToWallet = async (req, res) => {
  const { userId, businessId } = req.body;

  if (!userId || !businessId) {
    return res.status(400).json({ message: "User ID and Business ID are required" });
  }

  try {
  
    const existingEntry = await knex('wallet')
      .where({ user_id: userId, business_id: businessId })
      .first();

    if (existingEntry) {
      return res.status(400).json({ message: "Business already in wallet" });
    }

   
    await knex('wallet').insert({
      user_id: userId,
      business_id: businessId,
    });

    res.status(201).json({ message: `Business ID ${businessId} added to wallet for User ID ${userId}` });
  } catch (error) {
    console.error("Error adding to wallet:", error.message);
    res.status(500).json({ message: "Failed to add business to wallet" });
  }
};

const getWallet = async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    // Joining the wallet table with the businesses table to retrieve business details
    const walletBusinesses = await knex('wallet')
      .join('businesses', 'wallet.business_id', '=', 'businesses.id')
      .select(
        'businesses.id',
        'businesses.name',
        'businesses.category',
        'businesses.location',
        'businesses.services'
      )
      .where('wallet.user_id', userId);

    if (walletBusinesses.length === 0) {
      return res.status(404).json({ message: "No businesses found in wallet for this user" });
    }

    res.status(200).json({ wallet: walletBusinesses });
  } catch (error) {
    console.error("Error retrieving wallet:", error.message);
    res.status(500).json({ message: "Failed to retrieve wallet businesses" });
  }
};

const deleteFromWallet = async (req, res) => {
  const { id } = req.params; //  `business_id`
  const { userId } = req.query; // Assuming `userId` is passed as a query parameter

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    // Attempting to delete the specified business for the given user
    const rowsDeleted = await knex('wallet')
      .where({ business_id: id, user_id: userId })
      .del();

    if (rowsDeleted) {
      res.status(200).json({ message: `Business ID ${id} removed from wallet` });
    } else {
      res.status(404).json({ message: "Business not found in wallet for this user" });
    }
  } catch (error) {
    console.error("Error deleting from wallet:", error.message);
    res.status(500).json({ message: "Failed to remove business from wallet" });
  }
};


async function addReview(req, res) {
  const { businessId } = req.params;
  const { userId, review_text, value_for_money, 
    trust_reliability,attention_to_details, perceived_worth, 
    timeliness, professionalism } = req.body;
  // Validating that all required fields are present
  const requiredFields = [
    'review_text',
    'value_for_money',
    'trust_reliability',
    'attention_to_details',
    'perceived_worth',
    'timeliness',
    'professionalism',
    'userId',
  ];
  
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ message: `${field} is required.` });
    }
  }
  
  // Validating that the rating values are within the allowed range (1-5)
  const ratings = [
    value_for_money, 
    trust_reliability, 
    attention_to_details, 
    perceived_worth, 
    timeliness, 
    professionalism
  ];
  for (let rating of ratings) {
        if (rating < 1 || rating > 5) {
          return res.status(400).json({ message: "Ratings must be between 1 and 5." });
        }
      }
  //Calculating average rating for the new review
  const averageRating = (
    value_for_money + trust_reliability + 
    attention_to_details + perceived_worth + 
    timeliness + professionalism) / 6;

  try {
    // Inserting the new review into the review table
    await knex('review').insert({
      business_id: businessId,
      user_id: userId,
      review_text,
      value_for_money,
      trust_reliability,
      attention_to_details,
      perceived_worth,
      timeliness,
      professionalism,
      average_rating: averageRating
    });

    // Calculating the new overall rating using SQL
    const [{ newOverallRating }] = await knex('review')
      .where('business_id', businessId)
      .avg('average_rating as newOverallRating');

    // Updating the overall rating in the business table
    await knex('business')
      .where('id', businessId)
      .update({ overall_rating: newOverallRating });

    res.status(201).json({ message: `Review added for business ID ${businessId}` });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ message: 'Error adding review', error });
  }
}

async function getReview(req, res) {
  const { id } = req.params; // Extracting the ID from params (matches the route definition)

  // Validate that the id is provided
  if (!id) {
    return res.status(400).json({ message: "Business ID is required." });
  }

  try {
    // Fetch overall_rating, business id, and name from the business table
    // const business = await knex('business')
    //   .where('id', id) // Use the `id` extracted from params
    //   .select('id', 'business_name', 'overall_rating')
    //   .first();

    // // If no business is found, return a 404 error
    // if (!business) {
    //   return res.status(404).json({ message: "Business not found." });
    // }

    // Fetch all reviews for the business from the review table
    const reviews = await knex('review')
      .where('business_id', id) // Use the `id` extracted from params
      .select(
        'business_id',
        'user_id',
        'review_text',
        'value_for_money',
        'trust_reliability',
        'attention_to_details',
        'perceived_worth',
        'timeliness',
        'professionalism',
        'average_rating'
      );

    // Respond with the required data
    res.status(200).json({
      // business,
      reviews,
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: "Failed to fetch business reviews.", error });
  }
}










export{
    getAllBusinesses,
    getBusinessesByCategory,
    getCategories,
    getAllServices,
    getBusinessDetails,
    getServicesByBusiness,
    addToWallet,
    getWallet,
    deleteFromWallet,
    addReview,
    getReview
    
}