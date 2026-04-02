import express from "express";
import getHealthService from "./get-health.service.js";

const getHealthController = express.Router();

getHealthController.get("/health", async (req, res) => {
  try {
    const healthStatus = await getHealthService();
    res.status(200).json(healthStatus);
  } catch (error) {
    console.error("Error fetching health status:", error);
    res.status(500).json({ error: "Failed to fetch health status" });
  }
});

export default getHealthController;