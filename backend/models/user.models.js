import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    githubId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    profileUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model.Schema("User", userSchema);

export default User;
