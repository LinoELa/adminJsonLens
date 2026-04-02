import { aboutModule } from "./about/about.module.js";
import { usersModule } from "./users/users.module.js";

// Core modules.
const coreModule = {
  modules: [

    aboutModule,
    usersModule,
  ],
};

export {
  coreModule,
};
