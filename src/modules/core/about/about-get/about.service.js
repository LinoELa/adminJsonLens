function getAboutService() {
  return {
    app: "adminJsonLens",
    status: "Ok",
    endpoints: [
      "/health",
      "/api/health",
      "/about",
      "/api/about",
      "/users",
      "/api/users",
    ],
  };
}

module.exports = {
  getAboutService,
};
