import mongoose from "mongoose";
import User from "../models/user.models.js"

export const callback = 
  (req, res) => {
    res.redirect("/dashboard");
  };

export const login = (req, res) => {
  res.redirect("/");
};

export const success = (req, res) => {
  const userInfo = {
    id: req.session.passport.user.id,
    displayName: req.session.passport.user.username,
    provider: req.session.passport.user.provider,
  };
  res.render("fb-github-success", { user: userInfo });
}


export const logout = (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });};

