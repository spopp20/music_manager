import passport from 'passport';
import LocalStrategy from 'passport-local';
import { findUserByUsername } from './db';
import * as argon2 from 'argon2';

passport.serializeUser(function (user, done) {
  // serialize the username into session
  done(null, user.username);
});

passport.deserializeUser(function (req, id, done) {
  // deserialize the username back into user object
  const user = findUserByUsername(req, id);
  done(null, user);
});

passport.use(
  new LocalStrategy({ passReqToCallback: true }, (req, username, password, done) => {
    // Here you lookup the user in your DB and compare the password/hashed password
    const user = findUserByUsername(req, username);
    // Security-wise, if you hashed the password earlier, you must verify it
    if (!user || argon2.verify(user.password, password)) {
      done(null, null);
    } else {
      done(null, user);
    }
  }),
);

export default passport;
