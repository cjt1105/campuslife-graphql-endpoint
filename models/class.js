import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  professor: {
    type: String
  },
  section: {
    type: Number
  },
  t_a: {
    type: String
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  posts: {
    type: Array
  },
  notes: {
    type: Array
  }
});

export default mongoose.model('Class', classSchema);
