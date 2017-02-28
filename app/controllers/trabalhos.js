//app/controller/trabalho.js


module.exports = function (app) {

  var Trabalho = app.models.ordens;

  var controller = {};

  controller.listaTrabalhos = function (req, res) {
    var promise = Trabalho.find().exec()
      .then(
      function (trabalhos) {
        res.json(trabalhos);
      },
      function (erro) {
        Console.error(erro);
        res.status(505).json(erro);
      }
      );
  };

  controller.obtemTrabalho = function (req, res) {
    var _id = req.params.id;

    Trabalho.findById(_id).exec()
      .then(function (trabalho) {
        if (!trabalho) throw new Error('Trabalho não encontrado');
        res.json(trabalho);
      },
      function (erro) {
        console.log(erro);
        res.status(404).json(erro);
      }
      );

  };

  controller.salvarTrabalho = function (req, res) {
    var _id = req.body._id;

    if (_id) {
      Trabalho.findByIdAndUpdate(_id, req.body).exec()
        .then(function (trabalho) {
          res.json(trabalho);
        },
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        });
    } else {
      Trabalho.create(req.body)
        .then(
        function (trabalho) {
          res.status(201).json(trabalho);
        },
        function (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        )
    }
  }

  controller.removeTrabalho = function (req, res) {
    var _id = req.params.id;
    Trabalho.remove({ "_id": _id }).exec()
      .then(function () {
        res.end();
      },
      function (erro) {
        return console.error(erro);
      });
  };

  return controller;
}