const express = require("express");
const { getHealthService } = require("./health.service");

const getHealthController = express.Router();

getHealthController.get("/health", async (req, res) => {
  try {
    const data = await getHealthService();
    res.send(data);
  } catch (error) {
    res.send({
      app: "adminJsonLens",
      message: error.message,
    });
  }
});

module.exports = getHealthController;
