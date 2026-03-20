const getUsersController = require("./users-get/users.controller");
const { getUsersService } = require("./users-get/users.service");

const usersModule = {
  controller: getUsersController,
  service: getUsersService,
};

module.exports = {
  usersModule,
};
