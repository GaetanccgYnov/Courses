var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    utilisateurs: [{
      _id: String,
      nom: String,
      email: String,
      mot_de_passe: String,
      date_inscription: Date,
      preferences: {
        devise: String,
        langue: String
      }
    }]
  });

  var userModel = mongoose.model('users', userSchema);

  userModel.watch().on('change', data => {
    console.log('Change received: ', data);
  });

  module.exports = userModel;