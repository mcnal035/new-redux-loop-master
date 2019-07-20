const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');


router.post('/', (req,res)=>{
let feedback = req.body;
console.log(`adding feedback`, newSurvey);

let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                 VALUES ($1, $2, $3, $4);`;
pool.query(queryText, [feedback.Feeling, feedback.Understanding, feedback.Support, feedback.Comments, feedback.Flagged])
  .then(result => {
    res.sendStatus(201);
  })
  .catch(error => {
    console.log(`Error with POST`, error);
    res.sendStatus(500);
  });
});

module.exports = router;