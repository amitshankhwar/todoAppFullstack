import express from "express";
import {
  isAuth,
  loginController,
  logoutController,
  registerController,
} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/logout", logoutController);

router.get("/verify-token", isAuth);

export default router;
