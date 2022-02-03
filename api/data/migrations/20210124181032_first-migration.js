exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username").notNullable().unique();
      tbl.string("password").notNullable();
      tbl.string("name").notNullable();
      tbl.timestamp("age").defaultTo(knex.fn.now());
    })
    .createTable("classes", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("type").notNullable();
      tbl.string("location").notNullable();
      tbl.string("duration").notNullable();
      tbl.string("intensity").notNullable();
      tbl.integer("max_size").unsigned().notNullable();
      tbl.timestamp("age").defaultTo(knex.fn.now());
    })
    .createTable("classes", (tbl) => {
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE");
      tbl
        .integer("username")
        .unsigned()
        .notNullable()
        .references("username")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["user_id", "classes_id"]);
    })
    .createTable("attendees", (tbl) => {
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("classes_id")
        .unsigned()
        .notNullable()
        .references("classes.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["user_id", "classes_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("attendees")
    .dropTableIfExists("instructors_classes")
    .dropTableIfExists("classes")
    .dropTableIfExists("users");
};
