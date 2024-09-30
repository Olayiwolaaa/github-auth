import express from "express";
import passport from "passport";
import { callback, logout } from "../controllers/github.controller.js";



const router = express.Router();
// Route for GitHub authentication
router.get("/auth", passport.authenticate("github", { scope: ["user:email"] }));

// GitHub callback URL
router.get(
  "/callback",
  passport.authenticate("github", {
    failureRedirect: "/",
  }),callback
);

// Login route
app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  login
);

// Logout route
router.get("/logout", 
  logout
);

export default router;
