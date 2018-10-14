const knex = require("./connect");

module.exports = {
  getAll() {
    return knex("todo");
  },
  getOne(id) {
    return knex("todo")
      .where("id", id)
      .first();
  },
  create(todo) {
    return knex("todo").insert(todo, "*");
  },

  updateData(id, todo) {
    return knex("todo")
      .where("id", id)
      .update(todo, "*");
  },

  deleteData(id) {
    return knex("todo")
      .where("id", id)
      .del();
  }
};
