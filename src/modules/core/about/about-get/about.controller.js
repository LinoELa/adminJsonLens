import express from "express";
import { getAboutService } from "./about.service.js";

const getAboutController = express.Router();

getAboutController.get("/about", (req, res) => {
  const data = getAboutService();
  res.send(data);
});

export default getAboutController;
