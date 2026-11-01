import { Request, Response } from "express";
import { createPurchaseService } from "../services/purchaseService";


export const createPurchaseController = async (
  req: Request,
  res: Response
) => {

  try {

    const { albumId } = req.body;


    const user = req.user as any;


    const purchase = await createPurchaseService({
      buyerId: user.id,
      albumId,
    });


    return res.status(201).json({
      success: true,
      message: "Purchase created successfully",
      data: purchase,
    });


  } catch (error: any) {

    return res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};