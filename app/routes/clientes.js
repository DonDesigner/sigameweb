module.exports = function(app){

  var controller = app.controllers.clientes;

  app.route('/clientes')
  .get(controller.listarClientes)
  .post(controller.buscarClientes)
  .post(controller.salvarCliente);

  app.route('/clientes/:id')
  .get(controller.obterCliente)
  .delete(controller.removerCliente);

};