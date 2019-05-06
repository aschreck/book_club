const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'reviews';
  }

  static get idColumn() {
    return 'id';
  }

  static get firstName() {
    return this.firstName;
  }

  static get email() {
    return this.email;
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstname', 'email'],

      properties: {
        id: {type: 'integer'},
        email: { type: 'string'}
      }
    }
  }

  static get relationMappings() {
    const Review = require('./Review');

    return {
      reviews: {
        relationMappings: Model.HasManyRelation,

        modelClass: Review,
        join: {
          from: "users.id",
          to: "reviews.user_id"
        }
      }
    }
  }
}