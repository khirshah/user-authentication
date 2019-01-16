var express = require('express');
var app = express();
const asyncHandler = require('express-async-handler');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = require("./mongodb");
var dataRow = require('./mongoose-schema');

app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});
 
app.get('/', asyncHandler(async (req, res) => {
	var f = await dataRow.find({}, function(err, data){

        if (err) throw err;
        console.log("DATA",data)
        return data;
	});
	console.log(f)
  res.send(f)
}));
 
app.listen(3000)