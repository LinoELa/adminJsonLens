import { coreModule } from "./core/core.module.js";
import { healthModule } from "./health/health.module.js";
import { repositoryModule } from "./repository/repository.module.js";

// Root modules.
const modules = [
  healthModule,
  coreModule,
  repositoryModule,
];

export {
  modules,
};
