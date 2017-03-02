var clienteSchema = require('mongoose');

module.exports = function(){
  var schema = clienteSchema.Schema({
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
      type : String,
      required : true
    },
    ativo : {
      type : Boolean,
      required : true
    }
  });

  return clienteSchema.model('Clientes', schema, 'clientes');
}