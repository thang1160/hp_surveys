const mongoose = require('mongoose')
const Users = require('../db/models/user')

const URI = "mongodb+srv://hp:1WBadcfP9drImVdb@cluster0.z32qu.mongodb.net/hp_survey?retryWrites=true&w=majority"

const connectDB = async () => {
  await  mongoose.connect(URI, 
    {useNewUrlParser: true,
    useUnifiedTopology: true  });
  console.log('db connected..!')
}

module.exports = connectDB;