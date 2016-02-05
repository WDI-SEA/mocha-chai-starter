var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


var candies = [
  {id: 1, name: "Chewing Gum" , color: "Red"},
  {id: 2, name: "Pez"         , color: "Green"},
  {id: 3, name: "Marshmallow" , color: "Pink"},
  {id: 4, name: "Candy Stick" , color: "Blue"}
];

router.route('/')
  //GET all candies
  .get(function(req, res) {
    res.send(candies);
  })
  //POST a new candy
  .post(function(req, res) {
    candies.push({
      id: parseInt(req.body.id),
      name: req.body.name,
      color: req.body.color
    });
    res.send(req.body);
  });

// Show a candy
router.route('/:id')
  //GET candy with :id
  .get(function(req, res) {
    candy = candies.filter(function(element) {
      return element.id == req.params.id;
    })[0];
    res.send(candy);
  })
  //DELETE candy with :id
  .delete(function(req, res) {
    for (i in candies) {
      if (candies[i]["id"] == req.params.id) {
        candies.splice(i, 1);
        break;
      }
    }
    res.send({message : 'deleted'});
  });

// Update a candy
router.put('/:id/edit', function(req, res) {
  var candy = {
    id: parseInt(req.body.id),
    name: req.body.name,
    color: req.body.color
  };

  for (i in candies) {
    if (candies[i].id == parseInt(req.params.id)) {
      candies[i] = candy;
      break;
    }
  }
  res.send(candy);
});

module.exports = router