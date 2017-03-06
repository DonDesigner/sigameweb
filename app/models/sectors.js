//app/models/sectors.js

var sectorSchema = require('mongoose');

module.exports = function () {

  var schema = sectorSchema.Schema({

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

  return sectorSchema.model('Sectors', schema, 'Sectors');

};