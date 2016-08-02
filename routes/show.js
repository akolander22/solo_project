var router = require('express').Router();

var Show = require('../models/show');

router.get('/', function(request,response){
  Show.find({}, function(err, shows){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(shows);
    }
  })
})

router.post('/createShow', function(req,res){
  console.log('Created show');
  var data = request.body;

  var createdShow = new Show ({
    showName: data.show.name
  })

})


module.exports = router;
