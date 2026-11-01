import { prisma } from "../config/prisma";


interface CreatePurchaseData {
  buyerId: string;
  albumId: string;
}


export const createPurchaseService = async (
  data: CreatePurchaseData
) => {

  const { buyerId, albumId } = data;


  // cek album tersedia
  const album = await prisma.album.findUnique({
    where: {
      id: albumId,
    },
  });


  if (!album) {
    throw new Error("Album not found");
  }


  const purchase = await prisma.purchase.create({
    data: {
      buyerId,
      albumId,
      type: "ALBUM",
      status: "PENDING",

      // expired 24 jam
      expiredAt: new Date(
        Date.now() + 24 * 60 * 60 * 1000
      ),
    },
  });


  return purchase;
};