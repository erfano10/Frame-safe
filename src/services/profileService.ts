import { prisma } from "../config/prisma";

interface UpdateProfileData {
  brandName?: string;
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

  if (!existingProfile) {
    return await prisma.photographerProfile.create({
      data: {
        userId,
        ...data,
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