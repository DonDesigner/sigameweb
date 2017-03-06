module.exports = function (app) {
  let Clients = app.models.clients;

  let controller = {};

  controller.listClients = function (req, res) {
    console.log("Chegou listClients");
    var promise = Clients.find().exec()
      .then(
      function (clients) {
        res.json(clients);
      },
      function (erro) {
        console.error(erro);
        res.status(505).json(erro);
      }
      );
  };

  controller.searchClient = function(req, res){
    
    var promise = Clients.find({"cliente" : "/"}).exec()
    .then(
      function(clients){
        res.json(clients);
      },
      function(erro){
        console.error(erro);
        res.status(505).json(erro);
      }
    )
  };

  controller.getClient = function (req, res) {
    var _id = req.params.id;
    console.log("client");

    Clients.findById(_id).exec()
      .then(function (client) {
        if (!client) throw new Error('Cliente não encotrado');
        res.json(client);
      },
      function (erro) {
        console.log(erro);
        res.status(404).json(erro);
      }
      );
  };

  controller.saveClient = function (req, res) {
    var _id = req.body._id;
console.log("****** a ID" + req.body);
    if (_id) {
      Clients.findByIdAndUpdate(_id, req.body).exec()
        .then(function (client) {
          res.json(client);
        },
        function (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        );
    } else {
      Clients.create(req.body)
        .then(
        function (client) {
          res.status(201).json(client);
        },
        function (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        );
    }
  }

  controller.removeClient = function(req, res){
    var id = req.params.id;
    Clients.remove({"_id": id}).exec()
    .then(function(){
      res.end();
    },
    function(erro){
      return console.error(error);

    }
    );
  }

  return controller;
}