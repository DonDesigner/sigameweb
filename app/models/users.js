//app/models/users.js

var userSchema = require('mongoose');

module.exports = function () {

  var schema = userSchema.Schema({
    nick: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    pws: {
      type: String,
      required: true
    },
    sector: {
      type: userSchema.Schema.Types.ObjectId,
      ref: 'Sectors'
    },
    start:{
      type: Date
    },
    position:{
      type: String
    },
    web:{
      user:{
        type: String
      },
      pws: {
        type: String
      },
      enable:{
        type: Boolean
      }
    },
    login: {
      type: Boolean
    },
    enable:{
      type: Boolean
    }
  });

return userSchema.model('Users', schema, 'Users');

};