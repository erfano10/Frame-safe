import { Router } from "express";

import {
    getProfileController,
    updateProfileController
} from "../controllers/profileController"

import { authMiddleware } from "../middlewares/authMiddleware";
import {requireRole} from "../middlewares/roleMiddleware"


const router = Router()

router.get(
  "/",
  authMiddleware,
  requireRole("PHOTOGRAPHER"),
  getProfileController
);


router.put(
  "/",
  authMiddleware,
  requireRole("PHOTOGRAPHER"),
  updateProfileController
);


export default router;