var mongoose = require('mongoose');
module.exports = mongoose.model('User', User);


var Comment = new mongoose.Schema({
  text: String,
  username: { mongoose.Schema.Types.ObjectId, ref: 'User' :User.name
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});



module.exports = mongoose.model('Comment', Comment);
