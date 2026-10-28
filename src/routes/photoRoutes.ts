import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { requireRole } from "../middlewares/roleMiddleware";
import { createPhotoController, getPhotosByAlbumController } from "../controllers/photoController";


const router = Router();


router.post(
  "/",
  authMiddleware,
  requireRole("PHOTOGRAPHER"),
  createPhotoController
);

router.get(
  "/:albumId/photos",
  authMiddleware,
  requireRole("PHOTOGRAPHER"),
  getPhotosByAlbumController
);



export default router;