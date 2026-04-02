const { db } = require("../../config/config");

// Shared query runner.
async function queryRepository(text, params = []) {
  return db.query(text, params);
}

const repositoryModule = {
  modules: [],
};

module.exports = {
  repositoryModule,
  queryRepository,
};
