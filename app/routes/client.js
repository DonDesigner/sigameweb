module.exports = function(app){

  var controller = app.controllers.client;

  app.route('/api/clients')
  .get(controller.listClients)
  .post(controller.saveClient);

  app.route('/api/clients/:id')
  .get(controller.getClient)
  .delete(controller.removeClient);

};