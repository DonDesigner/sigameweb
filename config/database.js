var mongoose = require('mongoose');

module.exports = function(url){
    mongoose.set('debug', true);
    mongoose.connect(url);

    mongoose.connection.on('connected', function(){
        console.log('Mongoose conectado em :' + url);
    });

    mongoose.connection.on('disconnected', function(){
        console.log("Mongoose desconectado da url:" + url);
    });

    mongoose.connection.on('error', function(erro){
        console.log('Mongoose erro na conexão: '+ erro);
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log("Mongoose! Desconectado pelo término da aplicação");
            process.exit(0);
        });
    });
}