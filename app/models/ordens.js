var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        cliente: {
            type:String,
            required: true
        },
        trabalho: {
            type: String,
            require: true
        }
    });

    return mongoose.model('Ordens', schema, 'ordens');
};