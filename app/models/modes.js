//app/models/modes.js

var modeSchema = require('mongoose');

module.exports = function () {

  var schema = modeSchema.Schema({

    name: {
      type: String,
      required: true
    },
    icon: {
      type: String
    },
    enable: {
      type: Boolean
    }

  });

  return modeSchema.model('Modes', schema, 'Modes');

};