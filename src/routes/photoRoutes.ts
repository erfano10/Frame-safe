import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { requireRole } from "../middlewares/roleMiddleware";
import { createPhotoController, deletePhotoController, getPhotosByAlbumController, updatePhotoController } from "../controllers/photoController";


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

router.put(
  "/:id",
authMiddleware,
requireRole("PHOTOGRAPHER"),
updatePhotoController
)

router.delete(
  "/:id",
  authMiddleware,
  requireRole("PHOTOGRAPHER"),
  deletePhotoController
)
export default router;