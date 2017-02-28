var mongoose = require('mongoose');

module.exports = function(){
  var schema = mongoose.Schema({
    nome : {
      type : String,
      unique : true,
      required : true
    },
    cidade : {
      type : String,
      required : true
    },
    criado : {
      type : Date,
      required : true
    },
    ativo : {
      type : Boolean,
      required : true
    }
  });

  return mongoose.model('Clientes',schema, 'clientes');
}