const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');


router.post('/', (req,res)=>{
let newSurvey = req.body;
console.log(`adding feedback`, newSurvey);

let queryText = `INSERT INTO "feedback" ("id", feeling", "understanding", "support", "comments", "flagged")
                 VALUES ($1, $2, $3, $4, $5, $6);`;
pool.query(queryText, [newSurvey.id, newSurvey.feeling, newSurvey.understanding, newSurvey.support, newSurvey.comments, newSurvey.flagged])
  .then(result => {
    res.sendStatus(201);
  })
  .catch(error => {
    console.log(`Error adding new book`, error);
    res.sendStatus(500);
  });
});

module.exports = router;