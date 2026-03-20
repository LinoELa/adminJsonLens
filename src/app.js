const express = require("express");
const { modules } = require("./modules/index.module");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.get("/", (req, res) => {
  res.json({
    app: "adminJsonLens",
    message: "API lista. Usa /health, /about o /users.",
  });
});

function prefixApi() {
  return "/api";
}

function useModule(currentModule) {
  currentModule.modules
    .filter((item) => item.controller)
    .forEach((item) => {
      // Mount routes with and without /api.
      app.use("/", item.controller);
      app.use(prefixApi(), item.controller);
    });
}

modules.forEach(useModule);

app.prefixApi = prefixApi;
module.exports = app;
