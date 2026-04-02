import getAboutController from "./about-get/about.controller.js";
import { getAboutService } from "./about-get/about.service.js";

const aboutModule = {
  controller: getAboutController,
  service: getAboutService,
};

export {
  aboutModule,
};
