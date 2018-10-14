const seed_data = require("../dummy");
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("todo")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("todo").insert(seed_data);
    });
};
