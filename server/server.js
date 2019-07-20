const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sureveryRouter = require('./routes/survey.router')
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
const surveyRouter = require('./routes/survey.router.js');
app.use('/feedback', surveyRouter )

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});