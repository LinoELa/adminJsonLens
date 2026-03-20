const getHealthController = require("./health-get/health.controller");
const { getHealthService } = require("./health-get/health.service");

const healthModule = {
  controller: getHealthController,
  service: getHealthService,
};

module.exports = {
  healthModule,
};
