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
        //res.status(500).send();
    })
    .post((req,res)=>{
        lessons.push(JSON.parse(req.body));
        res.status(200).send();
    });

app.route('/lessons/:id')
    .delete((req,res) => {
        const lessonId = req.params.id;
        console.log('deleting lesson ', lessonId);
        const index = _.findIndex(lessons, {id: +lessonId});
        console.log('index ', index);
        lessons.splice(index, 1);
        res.status(200).send();
    });

var server = app.listen(9090, function(){
    console.log('Server running at http://localhost:' + server.address().port)
});
