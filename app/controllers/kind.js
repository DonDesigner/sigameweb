//app/controllers/kind.js

module.exports = function (app) {

  var Kind = app.models.kinds;

  var controller = {};

  controller.listKinds = function (req, res) {
    var promise = Kind.find().exec()
      .then(
      function (kinds) {
        res.json(kinds);
      },
      function (erro) {
        console.error(erro);
        res.status(505).json(erro);
      });
  }

  return controller;
};
