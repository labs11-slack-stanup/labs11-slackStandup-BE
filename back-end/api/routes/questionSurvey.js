const express = require("express");
const router = express.Router();


const db = require("../database/helpers/questionSurveyDb.js");
const activeSurveyCurieDb = require("../database/helpers/curieSurveyActiveDb"); // helper that relates to curieSurveyActiveDb.js

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




//GET //labs11
router.get('/',  (req, res) => {
  db.get()
    .then((data) => {
       res.status(200).json(data);
      }) //headers
     .catch((err) => {
        res.status(500).json({ success: false, message: 'The surveys could not be retrieved.' });
    })
});

//filtering by date and grabbing all surveys
//GET By Date //labs11
router.get('/created/:date',  (req, res) => {
  let { date }  = req.params
  console.log(date)
  db.getByDate(date)
    .then((data) => {
       res.status(200).json(data);
      }) //headers
     .catch((err) => {
        res.status(500).json({ success: false, message: 'The surveys date could not be retrieved.' });
    })
});

//GET by Id: LABS 11

router.get('/:id', (req, res) => {
      const { id } = req.params;

      db
          .getID(id)
          .then((surveys) => {
              if (surveys) {
                  res.status(200).json(surveys);
              } else {
                  res.status(404).json({ success: false, message: 'The survey with the specified ID does not exist.' });
              }
          })
          .catch((err) => {
              res.status(500).json({ success: false, error: 'This survey could not be retrieved.' });
          });
  });

  router.get("/manager/:id", (req, res) => {
    const { id } = req.params;
    db.get()
      .where({ manager_id: id })
      .then(getSuccess(res))
      .catch(serverErrorGet(res));
  });


  //GET change activity //labs 11 SF
  const type = "survey";

  router.get("/changeActivityCurie/:id", (req, res) => {
    let { id } = req.params;
    id = Number(id);
    let change;
    activeSurveyCurieDb.getBySurveyID(id).then(data => {
      if (data.length > 0) {
        console.log("data change", data);
        let activity = data[0].active;
        let surveyActiveID = data[0].id;
        console.log("activity", activity);

        if (activity === 1) {
          change = {
            active: false
          };
        } 
        else {
          change = {
            active: false
          };
        }
        activeSurveyCurieDb
          .update(surveyActiveID, change)
          .then(() => {


            let stringSurveyId = id.toString();
            stringSurveyId + 'n'
            console.log("stringSurveyId", stringSurveyId);
            var my_job = schedule.scheduledJobs[stringSurveyId];
            my_job.cancel();
            res.status(200).json({ message: `Survey ID: ${id} canceled` });
          })
          .catch(() => {
            serverErrorUpdate500(res, type);
          });
      } else {
        serverErrorUpdate404(res, type, id);
      }
    });
  });




// //POST //labs11
// router.post("/", (req, res) => {
//   const postInfo = req.body;

//   db.insert(postInfo)
//     .then(postSuccess(res))
//     .catch(serverErrorPost(res));
// });

//DELETE LABS 11 -tested by Justin
router.delete('/:id', (req, res) => {
  const {id} = req.params;
  db.
  remove(id)
  .then(data => {
      if (data) {
          res.status(204).end();
      } else {
          res.status(404).json({ success: false, message: "The survey with the specified ID does not exist." });
      }
  })
      .catch(err => {
          res.status(500).json({ error: "The survey could not be removed" })
  })
})

// PUT LABS 11 -tested by Justin
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const surveyChanges = req.body;

  db.update(id, surveyChanges)
  .then(data => {
      if( !data) {
          res.status(404).json({ success: false, message: 'The survey with the specified ID does not exist.' })
      }  else if ( !surveyChanges ) {
          return res.status(400).json({  success: false, errorMessage: 'Please provide info for the survey.' })

      }
       else {
          return res.status(200).json({ success: true, surveyChanges })
      }
  })
  .catch(err => {
      res.status(500).json({  success: false, error: 'This may not be modified'})
  })
})


module.exports = router;