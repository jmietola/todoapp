var express = require('express')
  , router = express.Router()

  router.route('/todos')

      //TODO Get all todos from database
      .get(function(req, res) {
      res.json({ message:  [
          {
        		"todo": "Mongoose ORM"
        	}, {
        		"todo": "Move logic from server to separate files"
        	}
        ] });
      })


      //TODO Creating todo
      .post(function(req, res) {
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
