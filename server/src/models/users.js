const mongoose = require('mongoose')
const { Schema } = mongoose;

const usersSchema = new Schema({
  name: {type:String, },
  email: {type:String, required: true},
  password:  {type:String, required: true},
  // cofirmpassword:  {type:String, required: true},
  userRole:  {type:String, },
  faculty:  {type:String, },
  semester:  {type:Number,},
  
  },
  { collection: 'users' });

module.exports= mongoose.model('Users', usersSchema);
