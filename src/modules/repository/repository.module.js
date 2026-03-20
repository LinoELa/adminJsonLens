const moduleRepository = require("./modules/repository");
const userRepository = require("./modules/user.repository");
const { db } = require("../../../config/config.index");

// Shared query runner.
async function queryRepository(text, params = []) {
  return db.query(text, params);
}

const repositoryModule = {
  modules: [userRepository],
  repository: moduleRepository,
};

module.exports = {
  repositoryModule,
  queryRepository,
};
