import express from "express";
import passport from "passport";
import { callback, login, logout, success } from "../controllers/github.controller.js";



const router = express.Router();
// Route for GitHub authentication
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

// GitHub callback URL
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/",
  }),
  callback
);

// Login route
router.get(
  "/github/login",
  passport.authenticate("github", { failureRedirect: "/login" }),
  login
);

// success route
router.get(
  "/github/success",
  success
);

// Logout route
router.get("/github/logout", logout);

export default router;
