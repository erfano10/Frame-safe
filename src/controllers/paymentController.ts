import { Request, Response } from "express";

import {
  createPayment,
  getPayments,
  approvePayment,
  rejectPayment
} from "../services/paymentService";




// CLIENT UPLOAD PAYMENT

export const createPaymentController = async(
 req:Request,
 res:Response
)=>{

 try{

   const user = req.user as any;


   const payment = await createPayment(
     user.id,
     req.body
   );


   res.json({
     success:true,
     message:"Payment proof submitted successfully",
     data:payment
   });


 }catch(error:any){

   res.status(400).json({
     success:false,
     message:error.message
   });

 }

};







// PHOTOGRAPHER GET PAYMENTS

export const getPaymentsController = async(
    
 _req:Request,
 res:Response
)=>{

 try{


  const payments = await getPayments();


  res.json({
    success:true,
    data:payments
  });


 }catch(error:any){

  res.status(400).json({
    success:false,
    message:error.message
  });

 }

};







// APPROVE PAYMENT

export const approvePaymentController = async(
 req:Request,
 res:Response
)=>{


 try{


  const payment = await approvePayment(
    String(req.params.id)
  );


  res.json({
    success:true,
    message:"Payment approved successfully",
    data:payment
  });


 }catch(error:any){

  res.status(400).json({
    success:false,
    message:error.message
  });

 }


};








// REJECT PAYMENT

export const rejectPaymentController = async(
 req:Request,
 res:Response
)=>{


 try{


  const payment = await rejectPayment(
    String(req.params.id)
  );


  res.json({
    success:true,
    message:"Payment rejected successfully",
    data:payment
  });



 }catch(error:any){

  res.status(400).json({
    success:false,
    message:error.message
  });

 }


};