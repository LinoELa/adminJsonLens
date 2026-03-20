function userEntity(row) {
  return {
    id: row.id ?? null,
    name: row.name ?? "",
    email: row.email ?? "",
    isActive: row.isActive ?? row.is_active ?? false,
    createdAt: row.createdAt ?? row.created_at ?? null,
  };
}

function getUsersEntity(rows = []) {
  return rows.map(userEntity);
}

module.exports = {
  userEntity,
  getUsersEntity,
};
