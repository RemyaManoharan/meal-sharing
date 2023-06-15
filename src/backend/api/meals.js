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

// HW part first qstn : /api/meals post adda new meal to the database
router.post("/", async (request, response) => {
  try {
    const { title, description, location, when, max_reservations, price } =
      request.body;
    //insert to database
    await knex("meal").insert({
      title,
      description,
      location,
      when,
      max_reservations,
      price,
      created_date: new Date(),
    });
    response.status(201).json({ success: true });
  } catch (error) {
    response.status(500).json({ error: "An error occurred" });
  }
});

// /api/meals/:id GET Returns the meal by id

router.get("/:id", async (request, response) => {
  try {
    const mealId = request.params.id;
    const meal = await knex("meal").where("id", mealId);
    if (!meal) {
      return response.status(404).json({ error: "meal not found" });
    }
    response.json(meal);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// /api/meals/:id PUT	Updates the meal by id
router.put("/:id", async (req, res) => {
  const mealId = req.params.id;
  const { title, description, location, when, max_reservations, price } =
    req.body;

  try {
    // Update the meal in the database using Knex
    await knex("meal").where("id", mealId).update({
      title,
      description,
      location,
      when,
      max_reservations,
      price,
    });

    res.sendStatus(204); // Successful update, no content
  } catch (error) {
    res.sendStatus(500); // Internal server error
  }
});

// /api/meals/:id	DELETE	Deletes the meal by id
router.delete("/:id", async (req, res) => {
  const mealId = req.params.id;
  try {
    // checking whether mealis exits
    const mealExists = await knex("meal").where("id", mealId).first();
    if (!mealExists) {
      return res.status(404).send("Meal not found.Please provide a valid id");
    }
    // delete the meal in the database using Knex
    await knex("meal").where("id", mealId).del();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500); // Internal server error
  }
});

module.exports = router;
