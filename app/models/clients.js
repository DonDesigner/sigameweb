//app/models/clients.js

var clientSchema = require('mongoose');

module.exports = function(){
  var schema = clientSchema.Schema({
    name : {
      type : String,
      unique : true,
      required : true
    },
    city : {
      type : String,
      required : true
    },
    date : {
      type : String,
      required : true
    },
    enable : {
      type : Boolean,
      required : true
    }
  });

  return clientSchema.model('Clients', schema, 'clients');
}