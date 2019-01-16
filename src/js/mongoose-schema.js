var db = require('./mongodb');

var Schema = db.Schema;

var dataSchema = new Schema({
	email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  }
},
{ collection : 'users' });

// the schema is useless so far
// we need to create a model using it
var dataRow = db.model('DATA', dataSchema);

// make this available to our users in our Node applications
module.exports = dataRow;