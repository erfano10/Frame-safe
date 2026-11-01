import { Router } from "express";

import { createPurchaseController } from "../controllers/purchaseController";

import { authMiddleware } from "../middlewares/authMiddleware";
import { requireRole } from "../middlewares/roleMiddleware";


const router = Router();


router.post(
  "/",
  authMiddleware,
  requireRole("CLIENT"),
  createPurchaseController
);


export default router;
