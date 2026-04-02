// Shared query runner - TODO: Connect to DB when needed
async function queryRepository(text, params = []) {
  // return db.query(text, params);
}

const repositoryModule = {
  modules: [],
};

export {
  repositoryModule,
  queryRepository,
};
