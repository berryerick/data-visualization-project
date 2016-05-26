var mongoose = require('mongoose')
// var User = mongoose.model('User')

module.exports = {

  index: function(req, res){
    console.log("sample.json");
    
    res.json('sample.json')

  },
}
