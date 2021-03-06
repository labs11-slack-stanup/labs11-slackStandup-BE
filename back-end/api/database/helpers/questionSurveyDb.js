db = require("../dbConfig.js");

const table = "questionSurveys";

module.exports = {
  get: function() {
    return db(table);
  },
  getID: function(id) {
    return db(table).where("id", id);
  },
  getByDate: function(value) {
    return db(table).where('created_at', 'like', `%${value}%`);
  },
  getManagerID: function(manager_id) {
    return db(table).where("manager_id", manager_id);
  },

  insert: function(post) {
    return db(table)
      .insert(post)
      .then(ids => ({ id: ids[0] }));
  },
  update: function(id, post) {
    return db(table)
      .where("id", id)
      .update(post);
  },
  remove: function(id) {
    return db(table)
      .where("id", id)
      .del();
  }
};