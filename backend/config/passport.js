import { Strategy as GitHubStrategy } from "passport-github2";
import User, { findOne, findById } from "../models/user.models.js";

export default function (passport) {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {x
        const { id, username, displayName, profileUrl } = profile;
        try {
          let user = await findOne({ githubId: id });
          if (!user) {
            user = new User({
              githubId: id,
              username,
              displayName,
              profileUrl,
            });
            await user.save();
          }
          return done(null, user);
        } catch (err) {
          console.log(err);
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    findById(id, (err, user) => done(err, user));
  });
};
