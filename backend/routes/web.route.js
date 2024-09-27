import express from "express";
import passport from "passport";



const router = express.Router();
// Route for GitHub authentication
router.get(
  "/auth",
  passport.authenticate("github", { scope: ["user:email"] })
);

// GitHub callback URL
router.get(
  "/callback",
  passport.authenticate("github", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

// Logout route
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

export default router;
