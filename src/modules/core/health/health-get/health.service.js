const { queryRepository } = require("../../../repository/modules/repository");

async function getHealthService() {
  const result = await queryRepository("SELECT NOW() AS current_time");

  return {
    app: "adminJsonLens",
    status: "Ok",
    endpoints: ["/health", "/api/health"],
    databaseTime: result.rows[0].current_time,
  };
}

module.exports = {
  getHealthService,
};
