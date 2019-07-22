const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');


router.post('/', (req,res)=>{
let survey = req.body;
console.log(`adding feedback`, survey);

let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments" )
                 VALUES ($1, $2, $3, $4);`;
 let values = [survey.feeling, survey.understanding, survey.support, survey.comments]                
pool.query(queryText, values)
  .then(result => {
    res.sendStatus(201);
  })
  .catch(error => {
    console.log(`Error with POST`, error);
    res.sendStatus(500);
  });
});

module.exports = router;