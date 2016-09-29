var router = require('express').Router();
var User = require('../models/user');
var Show = require('../models/show').model;

//creates a show for the user
router.post('/createdShow', function(request,response){
  var data = request.body;
  var id = request.user._id;

  var createdShow = new Show ({
    showName: data.showName,
    summary: data.summary,
    runtime: data.runtime,
    status: data.status,
    url: data.url,
    premiered: data.premiered,
    image: data.image,
    episodesWatched: 0,
    totalEpisodes: data.totalEpisodes,
    tvMazeId: data.tvMazeId,
    network: data.network,
    caughtUp: false
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

router.get('/editEpisodes', function(request, response){
  var user = request.user;
  response.send(user);

})


router.post('/editEpisodes', function(request,response){
  console.log('editing episodes');
  var user = request.user;

  var data = request.body;
  var savedEpisodes = data.episodesWatched
  var tvId = data.tvId
  var caughtUp = data.caughtUp




  User.findById(user._id, function(err, user){

    var currentShow = user.shows.id(tvId);

    currentShow.episodesWatched = savedEpisodes;
    currentShow.caughtUp = caughtUp;

    user.save(function(err){
      if (err){
        console.log(err);
        response.sendStatus(500);
      } else {
        response.sendStatus(200);
      }
    })
  })
})

router.delete('/deleteShow/:id', function(request,response){
  console.log(request.params);
  // console.log(request.user);

  var user = request.user;
  var id = request.params.id;
  console.log(id);

  User.findById(request.user.id, function(err, user){
    if(err){
      console.log(err);
    }
    user.shows.id(id).remove();
    user.save(function(err){
      if(err){
        console.log(err);
      }
    })
  })

  Show.findByIdAndRemove(id, function(err){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('Show Deleted');
      response.sendStatus(200);
    }
  })
})


module.exports = router;
