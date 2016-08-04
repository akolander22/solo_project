var router = require('express').Router();

var Show = require('../models/show');

router.get('/', function(request,response){
  Show.find({}, function(err, users){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(users);
    }
  })
})

router.post('/createdShow', function(request,response){
  console.log('Created show');
  var data = request.body;

  var createdShow = new Show ({
    showName: data.showName
  })

  createdShow.save(function(err){
    if(err){
      console.log('Save err', err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  })

})


module.exports = router;
