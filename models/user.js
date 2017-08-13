import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  dorm: {
    type: String
  },
  aparment: {
    type: String
  },
  classes: {
    type: Array
  }
});

export default mongoose.model('User', userSchema);
