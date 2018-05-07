var express = require('express')
  , router = express.Router()

var TodoModel = require('./../models/todo');

  router.route('/todos')

      //TODO Get all todos from database
      .get(function(req, res) {
        TodoModel.find({}, 'name', function(err, todos){
            if(err){
              console.log(err);
            } else{
                console.log(todos);
                res.json({'todos': todos});
                console.log('retrieved list of names', todos.length, todos[0].name);
            }
        })
      })

      //TODO Creating todo
      .post(function(req, res) {

        // Create an instance of model SomeModel
        var awesome_instance = new TodoModel({ name: 'awesome' });

        // Save the new model instance, passing a callback
        awesome_instance.save(function (err) {
          if (err) return handleError(err);
          // saved!
        });

      res.json({ message: 'Todo Created' });
    });

router.route('/todos/:id')

    //TODO Updating todo
    .put((req, res) => {
      console.log(req.params.id);
      res.send({ });
    })

    //TODO Delete todo
    .delete((req, res) => {
      console.log(req.params.id);
      res.send({ });
    });

module.exports = router
