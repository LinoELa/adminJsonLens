import getHealthController from "./get-health/get-health.controller.js";
import getHealthService from "./get-health/get-health.service.js";

const healthModule = {
  modules: [
    {
      controller: getHealthController,
      service: getHealthService,
    }
  ],
};

export {
  healthModule,
};
