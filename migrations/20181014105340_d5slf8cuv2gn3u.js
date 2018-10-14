exports.up = function(knex, Promise) {
  return knex.schema.createTable("todo", table => {
    table.increments();
    table.text("title");
    table.text("description");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("todo");
};
