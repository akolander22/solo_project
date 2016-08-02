var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;


var UserSchema = new Schema({
   username: { type: String, required: true, index: { unique: true } },
   password: { type: String, required: true }
});

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
