const express = require("express");
const { getUsersService } = require("./users.service");

const getUsersController = express.Router();

getUsersController.get("/users", async (req, res) => {
  try {
    const data = await getUsersService();
    res.send(data);
  } catch (error) {
    res.send({
      app: "adminJsonLens",
      message: error.message,
    });
  }
});

module.exports = getUsersController;
