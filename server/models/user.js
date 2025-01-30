import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters']
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  preferences: {
    darkMode: {
      type: Boolean,
      default: false
    }
  }
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);