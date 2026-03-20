const getAboutController = require("./about-get/about.controller");
const { getAboutService } = require("./about-get/about.service");

const aboutModule = {
  controller: getAboutController,
  service: getAboutService,
};

module.exports = {
  aboutModule,
};
