//app/routes/users.js

module.exports = function(app){
  var controller = app.controllers.user;

  app.route('/api/users')
  .get(controller.listUsers);

}