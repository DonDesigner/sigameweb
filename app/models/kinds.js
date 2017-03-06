//app/models/kinds.j

var kindSchema = require('mongoose');

module.exports = function(){
  var schema = kindSchema.Schema({
    name:{
      type: String,
      required: true
    },
    enable:{
      type: Boolean
    }
  });

  return kindSchema.model('Kinds', schema, 'Kinds');

};