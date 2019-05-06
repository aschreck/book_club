exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('reviews', table => {
      table.increments('id').primary()
      table.integer('stars')
      table.bigInteger("book_id").references('id').inTable('books')
      table.bigInteger("user_id").references('id').inTable("users")
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('reviews')
  ])
};
