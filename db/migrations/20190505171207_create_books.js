
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('books', table => {
      table.increments('id').primary()
      table.string('title')
      table.integer('pages')
      table.integer('publication_year')
      table.bigInteger("author_id").references('id').inTable('authors')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('books')
  ])
};
