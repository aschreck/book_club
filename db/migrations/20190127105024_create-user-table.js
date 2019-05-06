
exports.up = function(knex, Promise) {
  let createUsers = `CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    firstName TEXT,
    email TEXT,
    created_at TIMESTAMP
  );`
  return knex.raw(createUsers)
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE users`
  return knex.raw(dropQuery)
};
