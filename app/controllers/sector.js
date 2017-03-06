//app/controlers/sector.js

module.exports = function (app) {
  var Sector = app.models.sectors;

  var controler = {};

  controler.listSectors = function (req, res) {
    var promise = Sector.find().exec()
      .then(
      function (sectors) {
        res.json(sectors);
      },
      function (erro) {
        console.error(erro);
        res.status(505).json(erro);
      });
  };

  controler.listAssignments = function(req, res){
    res.status(505);
  };

  return controler;

}