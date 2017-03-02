var ordemSchema = require('mongoose');

module.exports = function(){
    var schema = ordemSchema.Schema({
        cliente: {
            type:String,
            required: true
        },
        trabalho: {
            type: String,
            require: true
        }
    });

    return ordemSchema.model('Ordens', schema, 'ordens');
};