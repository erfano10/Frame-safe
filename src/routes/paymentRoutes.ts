import { Router } from "express";

import {
 createPaymentController,
 getPaymentsController,
 approvePaymentController,
 rejectPaymentController
} from "../controllers/paymentController";


import { authMiddleware } from "../middlewares/authMiddleware";
import { requireRole } from "../middlewares/roleMiddleware";


const router = Router();



// CLIENT UPLOAD PAYMENT PROOF

router.post(
 "/",
 authMiddleware,
 requireRole("CLIENT"),
 createPaymentController
);




// PHOTOGRAPHER VIEW PAYMENT

router.get(
 "/",
 authMiddleware,
 requireRole("PHOTOGRAPHER"),
 getPaymentsController
);




// PHOTOGRAPHER APPROVE

router.patch(
 "/:id/approve",
 authMiddleware,
 requireRole("PHOTOGRAPHER"),
 approvePaymentController
);




// PHOTOGRAPHER REJECT

router.patch(
 "/:id/reject",
 authMiddleware,
 requireRole("PHOTOGRAPHER"),
 rejectPaymentController
);



export default router;