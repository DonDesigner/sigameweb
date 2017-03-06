module.exports = function (app) {
  var controller = app.controllers.works;

  app.route('/api/works')
    .get(controller.listWorks)
    .post(controller.saveWork);

  app.route('/api/works/:id')
    .get(controller.getWork)
    .delete(controller.removeWork);
    
 
  

}