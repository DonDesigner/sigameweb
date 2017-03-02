module.exports = function (app) {
  var controller = app.controllers.trabalhos;

  app.route('/api/trabalhos')
    .get(controller.listaTrabalhos)
    .post(controller.salvarTrabalho);

  app.route('/api/trabalhos/:id')
    .get(controller.obtemTrabalho)
    .delete(controller.removeTrabalho);
    
 
  

}