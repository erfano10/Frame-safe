import { prisma } from "../config/prisma";


interface CreatePaymentData {
  purchaseId: string;
  proofUrl: string;
}


// CLIENT UPLOAD PAYMENT PROOF
export const createPayment = async (
  buyerId: string,
  data: CreatePaymentData
) => {

  const purchase = await prisma.purchase.findUnique({
    where: {
      id: data.purchaseId,
    },
  });


  if (!purchase) {
    throw new Error("Purchase not found");
  }


  if (purchase.buyerId !== buyerId) {
    throw new Error("You are not allowed to pay this purchase");
  }


  if (purchase.status !== "PENDING") {
    throw new Error("Purchase already processed");
  }


  const existingPayment = await prisma.payment.findUnique({
    where:{
      purchaseId:data.purchaseId
    }
  });


  if(existingPayment){
    throw new Error("Payment already submitted");
  }


  const payment = await prisma.payment.create({
    data:{
      purchaseId:data.purchaseId,
      proofUrl:data.proofUrl,
      status:"PROOF_UPLOADED"
    }
  });


  return payment;
};




// PHOTOGRAPHER SEE PAYMENT
export const getPayments = async (
) => {

  const payments = await prisma.payment.findMany({

    include:{
      purchase:{
        include:{
          album:true,
          buyer:true
        }
      }
    },

    orderBy:{
      createdAt:"desc"
    }

  });


  return payments;
};





// APPROVE PAYMENT
export const approvePayment = async (
  paymentId:string
)=>{


  const payment = await prisma.payment.findUnique({
    where:{
      id:paymentId
    }
  });


  if(!payment){
    throw new Error("Payment not found");
  }



  const result = await prisma.$transaction([

    prisma.payment.update({
      where:{
        id:paymentId
      },
      data:{
        status:"PAID"
      }
    }),


    prisma.purchase.update({
      where:{
        id:payment.purchaseId
      },
      data:{
        status:"COMPLETED"
      }
    })

  ]);


  return result;

};





// REJECT PAYMENT
export const rejectPayment = async (
  paymentId:string
)=>{


  const payment = await prisma.payment.findUnique({
    where:{
      id:paymentId
    }
  });


  if(!payment){
    throw new Error("Payment not found");
  }



  const updatedPayment = await prisma.payment.update({

    where:{
      id:paymentId
    },

    data:{
      status:"REJECTED"
    }

  });


  return updatedPayment;

};