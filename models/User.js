import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

// Set `trim: true` on every string path by default
mongoose.Schema.Types.String.set('trim', true);

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide a valid email address.'],
      minlength: [12, 'Email cannot be less than 12 characters.'],
      maxlength: [60, 'Email cannot be more than 60 characters.'],
      unique: [true, 'Email addresses must be unique to validate.'],
    },
    emailVerified: {
      type: String,
    },
    userName: {
      type: String,
      required: [true, 'Please provide a user name with 5 characters or more.'],
      minlength: [5, 'Username cannot be less than 5 characters.'],
      maxlength: [60, 'Username cannot be more than 60 characters.'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password with 8 characters or more.'],
      match: [/^[a-zA-Z0-9]+$/, 'Requires Upper case, Lower case, and a number.'],
      minlength: [8, 'Password cannot be less than 8 characters.'],
      maxlength: [60, 'Password cannot be more than 60 characters.'],
    },
    name: {
      type: String,
      required: [true, 'Please provide a display name with 4 characters or more.'],
      minlength: [5, 'Display name cannot be less than 4 characters.'],
      maxlength: [60, 'Display name cannot be more than 60 characters.'],
    },
  },
  { timestamps: true },
);

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000),
    },
    secret,
  );
};

UserSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    bio: this.bio,
    image: this.image,
  };
};

const User = mongoose.model('User', UserSchema);

export default User;
