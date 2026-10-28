import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {requireRole} from "../middlewares/roleMiddleware"
import { createAlbumController, getAlbumsController , getAlbumDetailController, updateAlbumController, deleteAlbumController, updateAlbumStatusController} from "../controllers/albumController";


const router = Router();

router.post(
  "/",
  authMiddleware,
  requireRole("PHOTOGRAPHER"),
  createAlbumController,
  
);

router.get(
    "/",
    authMiddleware,
    requireRole("PHOTOGRAPHER"),
    getAlbumsController
)

router.get(
  "/:id",
  authMiddleware,
  requireRole("PHOTOGRAPHER"),
  getAlbumDetailController
);

router.put(
 "/:id",
 authMiddleware,
 requireRole("PHOTOGRAPHER"),
 updateAlbumController
);

router.delete(
 "/:id",
 authMiddleware,
 requireRole("PHOTOGRAPHER"),
 deleteAlbumController
);

router.patch(
  "/:id/status",
  authMiddleware,
  requireRole("PHOTOGRAPHER"),
  updateAlbumStatusController
);


export default router;