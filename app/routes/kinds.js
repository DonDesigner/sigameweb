//app/routes/kinds.js

module.exports = function (app) {
  var controller = app.controllers.kind;

  app.route('/api/kinds')
    .get(controller.listKinds);
};