import { prisma } from "../config/prisma";

interface UpdateProfileData {
  brandName: string;
  bio?: string;
  instagram?: string;
  whatsapp?: string;
  qrisUrl?: string;
}

export const getProfile = async (userId: string) => {
  return await prisma.photographerProfile.findUnique({
    where: {
      userId,
    },
  });
};

export const updateProfile = async (
  userId: string,
  data: UpdateProfileData
) => {
  const existingProfile =
    await prisma.photographerProfile.findUnique({
      where: {
        userId,
      },
    });


  if (!data.brandName) {
    throw new Error("Brand name is required");
  }
  if (!existingProfile) {
    return await prisma.photographerProfile.create({
      data: {
        userId,
        brandName: data.brandName ?? "Unnamed Studio",
        bio: data.bio,
        instagram: data.instagram,
        whatsapp: data.whatsapp,
        qrisUrl: data.qrisUrl
      },
    });
  }

  return await prisma.photographerProfile.update({
    where: {
      userId,
    },
    data,
  });
};