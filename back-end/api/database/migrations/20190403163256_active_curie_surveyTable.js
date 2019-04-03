exports.up = function(knex, Promise) {
    return knex.schema.createTable("active_curie_surveys", tbl => {
      tbl.increments("id");
      tbl.integer("survey_id");
      tbl.boolean("active");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("active_curie_surveys");
  };
  