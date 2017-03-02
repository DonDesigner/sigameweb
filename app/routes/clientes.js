module.exports = function(app){

  var controller = app.controllers.clientes;

  app.route('/api/clientes')
  .get(controller.listarClientes)
  .post(controller.buscarClientes)
  .post(controller.salvarCliente);

  app.route('/api/clientes/:id')
  .get(controller.obterCliente)
  .delete(controller.removerCliente);

};