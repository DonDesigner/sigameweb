var trabalhos = [
  { "_id": 1, "cliente": "Obra Prima", "trabalho": "Anuario 2017" },
  { "_id": 2, "cliente": "Enfoque", "trabalho": "Revista Fev2017" },
  { "_id": 3, "cliente": "FreeWay", "trabalho": "Catálogo Couro Modas" },
  { "_id": 4, "cliente": "Atlas Ceramica", "trabalho": "Mostruario" },

];


module.exports = function () {

  var controller = {};

  controller.listaTrabalhos = function (req, res) {
    res.json(trabalhos);
  };

  controller.obtemTrabalho = function(req, res){
    var idTrabalho = req.params.id;
    var trabalho = trabalhos.filter(function(trabalho){
      return trabalho._id == idTrabalho;
    })[0];

    trabalho ? res.json(trabalho) : res.status(404).send('Trabalho não encontrado');

  };

  controller.removeTrabalho = function(req, res){
    console.log("Trabalho :" + req.params.id);
    res.status(500).exec();
  };

return controller;
}