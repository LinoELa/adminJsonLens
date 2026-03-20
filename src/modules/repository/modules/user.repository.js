const { queryRepository } = require("./repository");

async function createUsersTableRepository() {
  // Ensure users table exists.
  return queryRepository(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      is_active BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `);
}

async function getUsersRepository() {
  // Read all users.
  await createUsersTableRepository();

  const result = await queryRepository(`
    SELECT id, name, email, is_active, created_at
    FROM users
    ORDER BY id ASC
  `);

  return result.rows;
}

module.exports = {
  createUsersTableRepository,
  getUsersRepository,
};
