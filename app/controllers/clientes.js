module.exports = function (app) {
  var Clientes = app.models.clientes;

  var controller = {};

  controller.listarClientes = function (req, res) {
    var promise = Clientes.find().exec()
      .then(
      function (clientes) {
        res.json(clientes);
      },
      function (erro) {
        console.error(erro);
        res.status(505).json(erro);
      }
      );
  };

  controller.buscarClientes = function(req, res){
    var query = req.body.query;
 
    var promise = Clientes.find({"nome" : new RegExp(query ,'i')}).exec()
    .then(
      function(clientes){
        res.json(clientes);
      },
      function(erro){
        console.error(erro);
        res.status(505).json(erro);
      }
    )
  };

  controller.obterCliente = function (req, res) {
    var _id = req.params.id;
    console.log(req.params.id.test);

    Clientes.findById(_id).exec()
      .then(function (cliente) {
        if (!cliente) throw new Error('Cliente não encotrado');
        res.json(cliente);
      },
      function (erro) {
        console.log(erro);
        res.status(404).json(erro);
      }
      );
  };

  controller.salvarCliente = function (req, res) {
    var _id = req.body._id;

    if (_id) {
      Clientes.findByIdAndUpdate(_id, req.body).exec()
        .then(function (cliente) {
          res.json(cliente);
        },
        function (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        );
    } else {
      Clientes.create(req.body)
        .then(
        function (cliente) {
          res.status(201).json(cliente);
        },
        function (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        );
    }
  };

  controller.removerCliente = function(req, res){
    var id = req.params.id;
    Clientes.remove({"_id": id}).exec()
    .then(function(){
      res.end();
    },
    function(erro){
      return console.error(error);

    }
    );
  };

  return controller;
}