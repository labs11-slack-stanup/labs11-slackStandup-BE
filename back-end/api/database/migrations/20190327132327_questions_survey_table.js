
exports.up = function(knex, Promise) {
    return knex.schema.createTable("questionSurveys", tbl => {
      tbl.increments("id");
      tbl.string("title").notNullable();
      tbl.string("question_1").notNullable();
      tbl.string("answer_1")
      tbl.string("question_2").notNullable();
      tbl.string("answer_2")
      tbl.string("question_3").notNullable();
      tbl.string("answer_3")
      tbl.integer("manager_id").notNullable();
      tbl.timestamp("created_at", true).defaultTo(knex.fn.now())
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("questionSurveys");
  };
