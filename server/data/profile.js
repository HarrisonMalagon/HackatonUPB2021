

/*
https://juanda.gitbooks.io/tutorial-sobre-acceso-a-bases-de-datos-mongodb-de/content/mongoose.html

// Read
userHackaton
userHackaton123
mongodb+srv://userHackaton:userHackaton123@cluster0.ycae8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// Read and Write
hackatonUPB
hackatonUPB789
mongodb+srv://hackatonUPB:hackatonUPB789@cluster0.ycae8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


hackatonUPB.profile
*/

var mongoose = require('mongoose')
var User = require('./User')
mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://userHackaton:userHackaton123@cluster0.ycae8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useMongoClient: true})
var db = mongoose.connection

db.on('error', function(err){
  console.log('connection error', err)
})

db.once('open', function(){
  console.log('Connection to DB successful')
})