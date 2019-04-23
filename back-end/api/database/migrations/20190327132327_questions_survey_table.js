
exports.up = function(knex, Promise) {
    return knex.schema.createTable("questionSurveys", tbl => {
      tbl.increments("id");
      tbl.string("title").notNullable();
      tbl.string("question_1").notNullable();
      tbl.string("question_2").notNullable();
      tbl.string("question_3").notNullable();
      tbl.integer("manager_id").notNullable();
      tbl.timestamp("created_at", true).defaultTo(knex.fn.now())
      tbl.string("survey_time_stamp");
      tbl.string("ex_time");
    });
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("questionSurveys");
  };
