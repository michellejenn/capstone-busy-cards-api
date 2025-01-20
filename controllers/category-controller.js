import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

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

export{
    getCategories
}