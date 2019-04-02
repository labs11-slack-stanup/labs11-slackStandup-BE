
exports.up = function(knex, Promise) {
    return knex.schema.createTable("questionSurveys", tbl => {
      tbl.increments("id");
      tbl.string("title").notNullable();
      tbl.string("question_1")
      tbl.string("answer_1").notNullable();
      tbl.string("question_2")
      tbl.string("answer_2").notNullable();
      tbl.string("question_3")
      tbl.string("answer_3").notNullable();
      tbl.integer("manager_id").notNullable();
      tbl.timestamps(true, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("questionSurveys");
  };
