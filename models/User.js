import mongoose from 'mongoose';

// Set `trim: true` on every string path by default
mongoose.Schema.Types.String.set('trim', true);

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide a valid email address.'],
      minlength: [12, 'Email cannot be less than 12 characters'],
      maxlength: [60, 'Email cannot be more than 60 characters'],
    },
    emailVerified: {
      type: String,
    },
    userName: {
      type: String,
      required: [true, 'Please provide a user name with 5 characters or more.'],
      minlength: [5, 'Username cannot be less than 5 characters'],
      maxlength: [60, 'Username cannot be more than 60 characters'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password with 8 characters or more.'],
      minlength: [8, 'Password cannot be less than 8 characters'],
      maxlength: [60, 'Password cannot be more than 60 characters'],
    },
    name: {
      type: String,
      required: [true, 'Please provide a display name with 4 characters or more.'],
      minlength: [5, 'Display name cannot be less than 4 characters'],
      maxlength: [60, 'Display name cannot be more than 60 characters'],
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', UserSchema);

export default User;
