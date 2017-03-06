//app/controllers/mode.js

module.exports = function (app) {
  var Mode = app.models.modes;

  var ctrl = {};

  ctrl.listModes = function (req, res) {
    var promise = Mode.find().exec()
      .then(
      function (modes) {
        res.json(modes);
      },
      function (erro) {
        console.log(erro);
        res.status(505).json(erro);
      });
  };

  return ctrl;

}