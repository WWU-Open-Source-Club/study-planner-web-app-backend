/* Authors: Timothy S. Poehlman, [ADD YOUR NAME HERE IF YOU MODIFY THIS PROGRAM] */

module.exports = app => {
  const User = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", User.create);

  // Retrieve all User
  router.get("/", User.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", User.findOne);

  // Update a Tutorial with id
  router.put("/:id", User.update);

  // Delete a Tutorial with id
  router.delete("/:id", User.delete);

  // Create a new Tutorial
  router.delete("/", User.deleteAll);

  app.use('/api/User', router);
};