const { aboutModule } = require("./about/about.module");
const { healthModule } = require("./health/health.module");
const { usersModule } = require("./users/users.module");

// Core modules.
const coreModule = {
  modules: [
    healthModule,
    aboutModule,
    usersModule,
  ],
};

module.exports = {
  coreModule,
};
