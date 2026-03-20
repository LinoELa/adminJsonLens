const express = require("express");
const { getAboutService } = require("./about.service");

const getAboutController = express.Router();

getAboutController.get("/about", (req, res) => {
  const data = getAboutService();
  res.send(data);
});

module.exports = getAboutController;
