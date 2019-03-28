const express = require("express");
const router = express.Router();
const knex = require("knex");
// const request = require("request");
// const schedule = require("node-schedule");

const db = require("../database/helpers/questionSurveyDb.js");
// const server = require("../server.js");
// const moment = require("moment");

// const teamMembersDb = require("../database/helpers/teamMembersDb");




//GET //labs11
router.get('/',  (req, res) => {
  db.get()
    .then(() => {
       res.status(200).json();
      }) //headers
     .catch((err) => {
        res.status(500).json({ success: false, message: 'The surveys could not be retrieved.' });
    })
});


    
// router.post('/', (req, res) => {
//   db.insert()
//   // .insert(req.body)
//   .then((questionSurvey) => {

//     db()
//     .where({ questionSurvey})
//     .first()
//     .then(response => {
//       res.status(200).json(response);
//     })
//   })
//   .catch(err => {
//     res.status(500).json(err);
//   })
// });

router.post("/", (req, res) => {
  db.insert(req.body)
  .then(([id]) => {
    db("questionSurveys") 
    .where({ id })
    .first()
    .then(response => {
      res.status(200).json(response);
    })
  })
  .catch(err => {
    res.status(500).json({message: "could not add new survey"});
  })
});

//DELETE LABS 11
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

// PUT 
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


// router.post('/', (req, res) => {
//     // add a role to the database
//     db('questionSurveys')
//     .insert(req.body)
//     .then(([id]) => {
//       db('questionSurveys')
//       .where({ id })
//       .first()
//       .then(banana => {
//         res.status(200).json(banana);
//       })
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     })
//   });

// router.post("/", (req, res) => {
//   const postInfo = req.body;
//   // body = manager_id/ description/ title / time values

//   teamMembersDb
//     .get()
//     .where("id", postInfo.manager_id)
//     .then(data => {
//       if (data.length === 0) {
//         res.status(404).json({
//           message: "can not add"
//         });
    
//         db.insert(insertInfo)
//           .then(() => {
//             db.get()
//               .then(data => {
//                 let newID = Math.max.apply(
//                   Math,
//                   data.map(function(o) {
//                     return o.id;
//                   })
//                 );
//                 surveyAcitveDb
//                   .insert(postActive)
//                   .then(postSuccess(res))
//                   .catch(serverErrorPost(res));

                
//                 db.getManagerID(postInfo.manager_id)
//                   .then(data => {
//                     console.log("survey manager", data);

//                     let survey_ID = Math.max.apply(
//                       Math,
//                       data.map(function(o) {
//                         return o.id;
//                       })
//                     );

//                     for (let i = 0; i < preFeelingIdsArray.length; i++) {
//                       let post = {
//                         survey_id: survey_ID,
//                         feelings_id: preFeelingIdsArray[i]
//                       };
//                       surveyFeelingsDb
//                         .insert(post)
//                         .then(getSuccess(res))
//                         .catch(serverErrorGet(res));
//                     }
//                   })
        
//                   .catch(serverErrorGet(res));
//               })
//               .catch(serverErrorGet(res));
//           })
//           .catch(serverErrorPost(res));
//       }
//     });
// });
    


// router.post('/', (req, res) => {
//   db.insert(req.body)
//     // .insert(req.body)
//     // .then(([id]) => {
  
//     // db('questionSurveys')
//     // .where({ id })
//     // .first()
//     .then(response => {
//       res.status(200).json(response);
//     })
// })
//   .catch(err => {
//     res.status(500).json(err);
//   });

// router.post('/',  (req, res) => {
//   db.insert(req.body)
  
//   .then(questionSurvey => {
//       res.status(200).json();
//   })
//   .catch(err => {
//       res.status(err).json()
//   })
// }) 


  





module.exports = router;