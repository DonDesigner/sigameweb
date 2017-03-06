//app/routes/sectors.js

module.exports = function(app){
  var controller = app.controllers.sector;

  app.route('/api/sectors')
  .get(controller.listSectors);

  app.route('/api/sectors/assignments/:sectorId')
  .get(controller.listAssignments);


}