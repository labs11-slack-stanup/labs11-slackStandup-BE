const express = require("express");
const router = express.Router();


const db = require("../database/helpers/curieAnswersDb.js");
const questionsDb = require("../database/helpers/questionSurveyDb");
const teamMembersDb = require("../database/helpers/teamMembersDb");


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


//GET Questions and Answers
router.get("/questions_id/:id", (req, res) => {
  const { id } = req.params;
  questionsDb
    .getID(id)
    .then(question => {
      const answers = db
        .getID(id)
        .then(answers => {
          res.status(200).json({message: "it's working", question, answers})
      })
     })
    .catch(err => {
      res.status(500).json({message: "not working yet"})
    })
});



//GET/team/:id (answers)
router.get('/', (req, res) => {

})




//make a put route
// dynamic variable survey_id and team

//POST 
//answer create own route provide survey_id, team_member_id, and first answer in initial value 

//GET BY SURVEY/TEAM_MEMBER ID CHECK FOR BOTH 
//second update
//conditional inside to check which question
//PUT
//third update

router.post("/", (req, res) => {
  const postInfo = req.body;
  let answerTable = {
    answer_1: postInfo.answer_1,
    answer_2: postInfo.answer_2,
    answer_3: postInfo.answer_3,
    survey_id: postInfo.survey_id,
    team_member_id: postInfo.team_member_id
  }
  db.getBySurveyIdTeamMemberId(postInfo.survey_id, postInfo.team_member_id)
  .then(surveyCheck => {
    console.log(surveyCheck)
    if(surveyCheck.length === 0 ) {
      db.insert(answerTable)
      .then(postAnswer => {
        res.status(201).json({answerTable, postAnswer})
      })
      .catch(err => {
        res.status(500).json(err)
      })
    } else {
      if(surveyCheck[0].answer_1 && surveyCheck[0].answer_2 === '' && postInfo.answer_2 ) {
        db.update(surveyCheck[0].id, { answer_2: postInfo.answer_2  }) 
        .then(updateAnswer => {
          res.status(200).json({answerTable, updateAnswer})
        })
        .catch(err => {
          res.status(500).json(err)
        })
      } else if (surveyCheck[0].answer_2 && surveyCheck[0].answer_3 === '' && postInfo.answer_3 ) {
        db.update(surveyCheck[0].id, { answer_3: postInfo.answer_3  }) 
        .then(lastUpdate => {
          res.status(200).json({answerTable, lastUpdate})
        })
        .catch(err => {
          res.status(500).json(err)
        })
      }
    } 
  } //.then

  )
}); // end post

module.exports = router;