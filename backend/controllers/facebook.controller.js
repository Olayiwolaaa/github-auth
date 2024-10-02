import mongoose from "mongoose";
import User from "../models/user.models.js";


const APP_ID = process.env.FACEBOOK_CLIENT_ID;
const APP_SECRET = process.env.FACEBOOK_CLIENT_SECRET;
const REDIRECT_URI = process.env.FACEBOOK_CALLBACK_URL;

export const validate = async (req, res) => {
  const url = `https://www.facebook.com/v13.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&scope=email`;
  res.redirect(url);
};

export const callback = async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange authorization code for access token
    const { data } = await get(
      `https://graph.facebook.com/v13.0/oauth/access_token?client_id=${APP_ID}&client_secret=${APP_SECRET}&code=${code}&redirect_uri=${REDIRECT_URI}`
    );

    const { access_token } = data;

    // Use access_token to fetch user profile
    const { data: profile } = await get(
      `https://graph.facebook.com/v13.0/me?fields=name,email&access_token=${access_token}`
    );

    // Code to handle user authentication and retrieval using the profile data

    res.redirect("/");
  } catch (error) {
    console.error("Error:", error.response.data.error);
    res.redirect("/login");
  }
};

export const logout = (req, res) => {
  // Code to handle user logout
  res.redirect("/login");
};
