import { queryRepository } from "../repository.module.js";

// Simple query to check DB connectivity.

async function healthRepository() {
  return queryRepository("SELECT NOW() AS current_time");
}

export { healthRepository };
