var database = require('mongoose');

database.connect('mongodb://localhost/authusers',{useNewUrlParser: true}, function (err) {

	if (err) throw err;

});

module.exports = database;