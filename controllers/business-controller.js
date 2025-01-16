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

export{
    getAllBusinesses,
    getBusinessesByCategory
}