import { getUsersRepository } from "../../../repository/modules/user.repository.js";
import { getUsersEntity } from "../user-entity/user.entity.js";

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

export {
  getUsersService,
};
