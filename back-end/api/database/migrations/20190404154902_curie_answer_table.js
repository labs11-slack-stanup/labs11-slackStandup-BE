exports.up = function(knex, Promise) {
    return knex.schema.createTable("curieAnswer", tbl => {
      tbl.increments("id");
      tbl.string("answer_1")
      tbl.string("answer_2")
      tbl.string("answer_3")

      tbl.integer("team_member_id")
      

      tbl.integer("survey_id")
      


      
      
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("curieAnswer");
  };
  