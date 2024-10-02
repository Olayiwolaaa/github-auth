import express from "express";
import passport from "passport";
import {
  callback as githubCallback,
  login as githubLogin,
  logout as githubLogout,
  success as githubSuccess,
} from "../controllers/github.controller.js";
import {
  validate as facebookValidate,
  callback as facebookCallback,
  logout as facebookLogout,
} from "../controllers/facebook.controller.js";

const router = express.Router();

// Function to apply dynamic prefix
const applyPrefix = (prefix, routeHandler) => {
  const subRouter = express.Router();
  routeHandler(subRouter); // Define the routes within the subRouter
  router.use(prefix, subRouter); // Apply the prefix to the group of routes
};

// Define GitHub routes
applyPrefix("/github", (router) => {
  router.get(
    "/validate",
    passport.authenticate("github", { scope: ["user:email"] })
  );
  router.get(
    "/callback",
    passport.authenticate("github", { failureRedirect: "/" }),
    githubCallback
  );
  router.get(
    "/login",
    passport.authenticate("github", { failureRedirect: "/login" }),
    githubLogin
  );
  router.get("/success", githubSuccess);
  router.get("/logout", githubLogout);
});

// Define Facebook routes
applyPrefix("/facebook", (router) => {
  router.get("/validate", facebookValidate);
  router.get("/callback", facebookCallback);
  router.get("/logout", facebookLogout);
});

export default router;