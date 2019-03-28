const express = require("express");
const router = express.Router();
const knex = require("knex");
// const request = require("request");
// const schedule = require("node-schedule");

const db = require("../database/helpers/questionSurveyDb.js");
// const server = require("../server.js");
// const moment = require("moment");


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
  


    


router.post("/", (req, res) => {
  const postInfo = req.body;

  db.insert(postInfo)
    .then(postSuccess(res))
    .catch(serverErrorPost(res));
});

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