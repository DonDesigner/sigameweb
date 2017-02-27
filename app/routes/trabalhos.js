module.exports = function (app) {
  var controller = app.controllers.trabalhos;

  app.route('/trabalhos')
    .get(controller.listaTrabalhos)
    .post(controller.salvarTrabalho);

  app.route('/trabalhos/:id')
    .get(controller.obtemTrabalho)
    .delete(controller.removeTrabalho);

}