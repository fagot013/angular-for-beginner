declare const require;

var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

import {lessonsData} from './11-services/lessons';


var app = express();
app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());


const lessons = lessonsData;


app.route('/lessons')
    .get((req,res)=>{
        res.status(200).json(lessons);
    })
    .post((req,res)=>{
        lessons.push(JSON.parse(req.body));
        res.status(200).send();
    })
    ;


var server = app.listen(9090, function(){
    console.log('Server running at http://localhost:' + server.address().port)
});
