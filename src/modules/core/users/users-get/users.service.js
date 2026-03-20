const { getUsersRepository } = require("../../../repository/modules/user.repository");
const { getUsersEntity } = require("../user-entity/user.entity");

async function getUsersService() {
  const usersRepository = await getUsersRepository();
  const users = getUsersEntity(usersRepository);

  return {
    users,
    app: "adminJsonLens",
    status: "Ok",
    endpoints: ["/users", "/api/users"],
    
  };
}

module.exports = {
  getUsersService,
};
