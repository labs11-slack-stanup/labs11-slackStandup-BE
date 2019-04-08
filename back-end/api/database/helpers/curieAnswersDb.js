db = require("../dbConfig.js");

const table = "curieAnswer";

module.exports = {
  get: function() {
    return db(table);
  },
  getID: function(id) {
    return db(table).where("id", id);
  },
  getBySurveyIdTeamMemberId: function(survey_id, team_member_id) {
    return db(table).where({"survey_id": survey_id, "team_member_id": team_member_id});
  },
  insert: function(post) {
    return db(table)
      .insert(post)
      .then(ids => ({ id: ids[0] }));
  },
  update: function(id, post) {
    return db(table)
      .where("id", id) //modify id to reference survey_id 
      .update(post);
  },
  remove: function(id) {
    return db(table)
      .where("id", id)
      .del();
  }
};