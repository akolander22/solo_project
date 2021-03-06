var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

//routes and models
var User = require('./models/user');
var login = require('./routes/login');
var register = require('./routes/register');
var showRouter = require('./routes/show');
var Show = require('./models/show');

var app = express();

//session password
app.use(session({
  secret: 'whirlypop',
  key: 'user',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 60 * 1000, secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/login', login);
app.use('/register', register);
app.use('/show', showRouter);


//when logging out clears logged in info and sends to root
app.get('/logout', function(request, response){
  console.log('Logging out');
  request.session.destroy();
  request.logout();
  response.redirect('/');
})

//gives base html page
app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, 'public/views/index.html'));
})

//passport for username and passwords
passport.use('local', new LocalStrategy({
      passReqToCallback : true,
      usernameField: 'username'
  },
  function(req, username, password, done){
    User.findOne({ username: username }, function(err, user) {
      if (err) {
         throw err
      };
      if (!user) {
        return done(null, false, {message: 'Incorrect username and password.'});
      }
      // test a matching password
      user.comparePassword(password, function(err, isMatch) {
        if (err) {
          throw err;
        }

        if (isMatch) {
          return done(null, user);
        } else {
          done(null, false, { message: 'Incorrect username and password.' });
        }
      });
    });
  })
);

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err,user){
    if(err) {
      return done(err);
    }
    done(null,user);
  });
});



//mongodb
var mongoURI = "";
  if(process.env.MONGODB_URI != undefined){
    mongoURI = "mongodb://heroku_29xg3qd4:lj98hmokv852dgl7jt4facmpee@ds153765.mlab.com:53765/heroku_29xg3qd4";
  } else {
    mongoURI = "mongodb://localhost:27017/tv_tracker_users";
  }
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('mongodb connection error', err);
});

MongoDB.once('open', function(){
  console.log('mongodb connection open!!');
})


var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
})
