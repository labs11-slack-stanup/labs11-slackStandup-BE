// API/curieAnswers is the route for testing

const express = require("express");
const router = express.Router();

const db = require("../database/helpers/curieAnswersDb.js");
const questionsDb = require("../database/helpers/questionSurveyDb");
const teamMembersDb = require("../database/helpers/teamMembersDb");
const dbAuth = require("../database/helpers/slackAuthDb");
const surveyRouter = require("../routes/surveyRouter.js");

//GET
router.get("/", (req, res) => {
  db
    .get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        message: "The answers could not be retrieved."
      });
    });
});

//GET Questions and Answers
router.get("/questions_id/:id", (req, res) => {
  const { id } = req.params;
  questionsDb
    .getID(id)
    .then(question => {
      const answers = db.getID(id).then(answers => {
        res.status(200).json({ message: "it's working", question, answers });
      });
    })
    .catch(err => {
      res.status(500).json({ message: "not working yet" });
    });
});

//get surveys, answers, team_id,
// Manager GET Questions and Answers for all users
//For clarifcation this endpoint only needs parsing to grab either all info for a manager or individual user
router.get("/team/:id", (req, res) => {
  const { id } = req.params;
  teamMembersDb
    .getByTeamId(id)
    .then(teams => {
      questionsDb.getManagerID(id).then(managerCheck => {
        console.log(managerCheck);
        db.getBySurveyId(id).then(answerCheck => {
          res.status(200).json({
            message: "grabbing teams",
            teams,
            managerCheck,
            answerCheck
          });
        });
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
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



const writeSlackAnswerAndSendNextQuestion = (req, res) => {
  const postInfo = req.body;
  
  console.log("postInfo",postInfo)
  
  
  // Find team member id for the slack id
  let teamMemberId =  3
  // // // Find latest Survey id for a team member id
  let surveyId = 229
  // Store text for the latest answer
  let answer = postInfo.event.text;

  db
    .getBySurveyIdTeamMemberId(surveyId, teamMemberId)
    .then(
      answerCheck => {
         console.log("answerCheck",answerCheck);
        if (answerCheck.length === 0) {

          let answerTable = {
            answer_1: answer,
            survey_id: surveyId,
            team_member_id: teamMemberId
          };

          db
            .insert(answerTable)
            .then(postAnswer => { 
              // Send second question
              surveyRouter.sendNextQuestion(teamMemberId, surveyId);
              // res.status(201).json({ search, postAnswer });
            })
            .catch(err => {
              // Send  message that it failed
              //res.status(500).json(err);
            });
        } else {
          if (
            answerCheck[0].answer_1 &&
            answerCheck[0].answer_2 === null &&
            answer
          ) {

            let answerTable2 = {
              answer_2: answer,
              survey_id: surveyId,
              team_member_id: teamMemberId
            };  

            db
              .update(answerCheck[0].id, { answer_2: answer })
              .then(updateAnswer => {
                // Send third quetsion
                surveyRouter.sendNextQuestion(teamMemberId, surveyId);
                //res.status(200).json({ answerTable2, updateAnswer });
              })
              .catch(err => {
                // Send  message that it failed
                // res.status(500).json(err);
              });
          } else if (
            answerCheck[0].answer_2 &&
            answerCheck[0].answer_3 === null &&
            answer
          ) {

            let answerTable3 = {
              answer_3: answer,
              survey_id: surveyId,
              team_member_id: teamMemberId
            };
  
            db
              .update(answerCheck[0].id, { answer_3: answer })
              .then(lastUpdate => {
                // Send success message
                //res.status(200).json({ answerTable3, lastUpdate });
              })
              .catch(err => {
                // send message that it failed
                // res.status(500).json(err);
              });
          }
        }
      } //.then
    );
}


router.post("/", (req, res) => {
  writeSlackAnswerAndSendNextQuestion(req, res);
}); // end post


//Ios route for posting answers

router.post("/ios", (req, res) => {
  const postInfo = req.body;
  let answerTable = {
    answer_1: postInfo.answer_1,
    answer_2: postInfo.answer_2,
    answer_3: postInfo.answer_3,
    survey_id: postInfo.survey_id,
    team_member_id: postInfo.team_member_id
  };
  db
    .getBySurveyIdTeamMemberId(postInfo.survey_id, postInfo.team_member_id)
    .then(answers => {
      console.log(answers);
      if (answers !== 0) {
        db.insert(answerTable).then(postAnswer => {
          res.status(201).json({ answerTable, postAnswer });
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports =   {router:router, writeAnswer:writeSlackAnswerAndSendNextQuestion};


// API/curieAnswers is the route for testing
