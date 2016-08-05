var router = require('express').Router();
var User = require('../models/user');
var Show = require('../models/show').model;

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
    showName: data.showName,
    summary: data.summary,
    runtime: data.runtime,
    status: data.status,
    url: data.url,
    premiered: data.premiered
  })

  createdShow.save(function(err){
    if(err){
      console.log('Save err', err);
      response.sendStatus(500);
    } else {

      User.findById(request.user._id, function(err, user){
        if(err){
          console.log(err);
        }

        user.shows.push(createdShow);

        user.save(function(err){
          if(err){
            console.log(err);
          };
        })
      })
      response.sendStatus(200);
    }
  })



})




module.exports = router;
