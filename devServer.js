var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


var employees = [
    {
        id: 1,
        name: "Venkat",
        designation: "CEO",
        age: 32,
        sex: "Male",
        description: "Lorem ipsum dolor sit",
        image: "http://placehold.it/400x200"   
    }, {
        id: 2,
        name: "Abhi",
        designation: "Software Engineer",
        age: 25,
        sex: "Male",
        description: "Lorem ipsum dolor sit",
        image: "http://placehold.it/400x200"   
    }, {
        id: 3,
        name: "Madhura",
        designation: "Software Engineer",
        age: 24,
        sex: "Female",
        description: "Lorem ipsum dolor sit",
        image: "http://placehold.it/400x200"   
    }
];
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/employees', function(req, res) {
   res.send(employees);
});
app.get('/employees/:id', function (req, res) {
    var employee = employees.filter(function(employee) { return employee.id == req.params.id})[0];
    res.send(employee);
});
app.post('/addemployee', function(req, res) {
    var allIds = employees.map(function(employee) { return employee.id});
    var nextId = Math.max.apply(Math, allIds) + 1;
    console.log(req.body);
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});
