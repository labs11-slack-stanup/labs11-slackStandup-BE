const express = require("express");
const router = express.Router();


const db = require("../database/helpers/curieAnswersDb.js");


const {
  postSuccess,
  serverErrorPost,
  getSuccess,
  serverErrorGet,
  serverErrorGetID,
  serverErrorDelete404,
  serverErrorDelete500,
  serverErrorUpdate404,
  serverErrorUpdate500
} = require("./routeHelpers/helpers.js");


//GET 
router.get('/',  (req, res) => {
    db.get()
      .then((data) => {
         res.status(200).json(data);
        }) 
       .catch((err) => {
          res.status(500).json({ success: false, message: 'The answers could not be retrieved.' });
      })
  });
  

  //make a put route 
  // dynamic variable survey_id and team 

//POST 
//answer create own route provide survey_id, team_member_id, and first answer in initial value 

//GET BY SURVEY/TEAM_MEMBER ID CHECK FOR BOTH 
//second update
//conditional inside to check which question
//PUT
//third update


  module.exports = router;