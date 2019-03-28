const express = require("express");
const router = express.Router();
const knex = require("knex");
// const request = require("request");
// const schedule = require("node-schedule");

const db = require("../database/helpers/questionSurveyDb.js");
// const server = require("../server.js");
// const moment = require("moment");

// const teamMembersDb = require("../database/helpers/teamMembersDb");





    
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
//       res.status(200).json({message: 'successful'});
//   })
//   .catch(err => {
//       res.status(err).json()
//   })
// }) 


  





module.exports = router;