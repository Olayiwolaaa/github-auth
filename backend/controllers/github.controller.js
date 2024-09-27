import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  githubId: String,
  username: String,
  displayName: String,
  profileUrl: String,
});

module.exports = mongoose.model("User", userSchema);
