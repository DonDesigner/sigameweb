module.exports = function (app) {
  var ctrl = app.controllers.mode;

  app.route('/api/modes')
    .get(ctrl.listModes);
}