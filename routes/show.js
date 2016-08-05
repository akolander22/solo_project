var router = require('express').Router();
var User = require('../models/user');
var Show = require('../models/show').model;

//had this but pretty sure it does nothing
// router.get('/', function(request,response){
//   Show.find({}, function(err, users){
//     if(err){
//       console.log(err);
//       response.sendStatus(500);
//     } else {
//       response.send(users);
//     }
//   })
// })

//creates a show for the user
router.post('/createdShow', function(request,response){
  console.log('Created show');
  var data = request.body;
  var id = request.user._id;

  var createdShow = new Show ({
    showName: data.showName,
    summary: data.summary,
    runtime: data.runtime,
    status: data.status,
    url: data.url,
    premiered: data.premiered,
    image: data.image
  })

//saves shows into a users 'collection'
  createdShow.save(function(err){
    if(err){
      console.log('Save err', err);
      response.sendStatus(500);
    } else {
      User.findById(id, function(err, user){
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

router.get('/findId', function(request, response){
  var id = request.user._id;
  // console.log('id is', id);

  User.findById(id, function(err, user){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(user);
    }
  })
})


module.exports = router;
