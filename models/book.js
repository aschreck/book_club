const { Model } = require("objection");

class Book extends Model {
  static get tableName() {
    return 'books';
  }

  static get idColumn() {
    return 'id';
  }

  static get title() {
    return this.title;
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'pages', 'publication_year'],

      properties: {
        id: {type: integer},
        title: {type: 'string'},
        pages: {type: 'integer'},
        publication_year: {type: 'integer'},
        author_id: {type: 'integer'}
      }
    }
  }

  static get relationMappings() {
    const Review = require('./Review');
    const Author = require('./Author');

    return {
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: 'books.id',
          to: 'reviews.book_id'
        }
      },

      authors: {
        relation: Model.BelongsToOneRelation,
        modelClass: Author,
        join: {
          from: 'authors.id',
          to: 'reviews.author_id'
        }
      }
    }
  }

}

module.exports = Book;