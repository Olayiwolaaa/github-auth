import mongoose from "mongoose";
import User from "../models/user.models.js"

export const callback = 
  (req, res) => {
    res.redirect("/dashboard");
  };

export const logout = (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });};

