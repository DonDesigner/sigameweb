//app/controllers/user.js

module.exports = function (app) {

  var Users = app.models.users;

  var controller = {};

  controller.listUsers = function (req, res) {
    var promise = Users.find().exec()
      .then(function (users) {
        res.json(users);
      },
      function (erro) {
        console.log(erro);
        res.status(505).json(erro);
      });
  }


  return controller;
}