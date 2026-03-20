const { coreModule } = require("./core/core.module");
const { repositoryModule } = require("./repository/repository.module");

// Root modules.
const modules = [
  coreModule,
  repositoryModule,
];

module.exports = {
  modules,
};
