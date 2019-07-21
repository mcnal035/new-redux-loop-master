const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');


router.post('/', (req,res)=>{
let survey = req.body;
console.log(`adding feedback`, survey);

let queryText = `INSERT INTO "feedback" ("comments", "feeling", "understanding", "support" )
                 VALUES ($1, $2, $3, $4);`;
pool.query(queryText, [survey.comments, survey.feeling, survey.understanding, survey.support])
  .then(result => {
    res.sendStatus(201);
  })
  .catch(error => {
    console.log(`Error with POST`, error);
    res.sendStatus(500);
  });
});

module.exports = router;