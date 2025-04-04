import express from "express";
import passport from "../config/passport";
import {
  getHomeData,
  getModelDetails,
  getLanguageLibraries,
} from "../controllers/mainController";

const router = express.Router();

router.get("/", getHomeData);
router.get("/model/:id", getModelDetails);
router.get("/language/:id/libraries", getLanguageLibraries);

// Google OAuth Routes
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

export default router;
