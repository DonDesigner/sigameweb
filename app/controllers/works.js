//app/controller/work.js


module.exports = function (app) {

  var Work = app.models.works;

  var controller = {};

  controller.listWorks = function (req, res) {
    var promise = Work.find().exec()
      .then(
      function (works) {
        res.json(works);
      },
      function (erro) {
        console.error(erro);
        res.status(505).json(erro);
      }
      );
  };

  controller.getWork = function (req, res) {
    var _id = req.params.id;

    Work.findById(_id).exec()
      .then(function (works) {
        if (!work) throw new Error('Trabalho não encontrado');
        res.json(work);
      },
      function (erro) {
        console.log(erro);
        res.status(404).json(erro);
      }
      );

  };

  controller.saveWork = function (req, res) {
    var _id = req.body._id;

    if (_id) {
      Work.findByIdAndUpdate(_id, req.body).exec()
        .then(function (work) {
          res.json(work);
        },
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        });
    } else {
      Work.create(req.body)
        .then(
        function (work) {
          res.status(201).json(work);
        },
        function (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        )
    }
  }

  controller.removeWork = function (req, res) {
    var _id = req.params.id;
    Work.remove({ "_id": _id }).exec()
      .then(function () {
        res.end();
      },
      function (erro) {
        return console.error(erro);
      });
  };

  return controller;
}