var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var show = require('./show').schema;


var SALT_WORK_FACTOR = 10;

//establishes user is username and password, required unique username
var UserSchema = new Schema({
   username: { type: String, required: true, index: { unique: true } },
   password: { type: String, required: true },
  //  shows: [{ showName: String, required: false}]
   shows: [show]
});



//saves the password to database after hashing
UserSchema.pre('save', function(next){
  var user = this;
  if(user.isModified('password') == false){
    return next();
  };
  bcrypt.hash(user.password, SALT_WORK_FACTOR, function(err, hash){
    if(err){
      console.log(err);
    }
    console.log('Hashed Password', hash);
    user.password = hash;
    return next();
  });

})

//compares password in data base to entered password to allow access
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    var user = this;

    bcrypt.compare(candidatePassword, user.password, function(err, isMatch){
      if(err){
        console.log(err);
        cb(err, isMatch);
      } else {
      console.log('isMatch', isMatch);
      cb(null, isMatch);
    };
  })
};

module.exports = mongoose.model('User', UserSchema);
