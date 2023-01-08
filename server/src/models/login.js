const mongoose = require('mongoose')
const { Schema } = mongoose;

const loginSchema = new Schema({
    name: {type:String, required: true},
    password:  {type:String, required: true},
  },
  { collection: 'login' });



  

module.exports= mongoose.model('login', loginSchema);
