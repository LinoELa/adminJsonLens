import getUsersController from "./users-get/users.controller.js";
import { getUsersService } from "./users-get/users.service.js";

const usersModule = {
  controller: getUsersController,
  service: getUsersService,
};

export {
  usersModule,
};
