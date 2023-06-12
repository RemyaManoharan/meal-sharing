const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    console.log("hello");
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("title");
    console.log(titles);
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
