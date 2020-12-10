import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number,
    index: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

export default User;
