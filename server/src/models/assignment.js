const mongoose = require('mongoose')
const { Schema } = mongoose;

const assignmentSchema = new Schema({
    assignmentName: { type: String, },
    deadline: { type: String,  },
    faculty: { type: String,  },
    semester: { type: String,  },
   
  },
  { collection: 'assignment' });

module.exports= mongoose.model('assignment', assignmentSchema);
