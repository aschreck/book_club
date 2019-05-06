const { Model } = require('objection');

class Author extends Model {
  static get tableName() {
    return 'authors';
  }
  static get idColumn() {
    return 'id';
  }
  static get name(){
    return this.name;
  }

  static get jsonSchema() {
    return {

      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
  }

  static get relationMappings() {
    const Book = require('./Book');
    return {
      books: {
        relation: Model.HasManyRelation,
        modelClass: Book,
        join: {
          from: 'authors.id',
          to: 'book.author_id'
        }
      }
    }
  }
}