var mongoose = require('mongoose')
var http = require('http')
// var User = mongoose.model('User')

module.exports = {

  index: function(req, res, http){
    // console.log("sample.json");
    var data = require('../config/sample.js');
    console.log('Data: ' +data);
    // return data
    res.json(data)


    // http.get('http://colorclickers.com/display').success(function(data){
    //   console.log(data);
    // })
    // res.json('http://colorclickers.com/display')

  },
}
