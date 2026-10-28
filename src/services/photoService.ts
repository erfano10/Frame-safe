import { prisma } from "../config/prisma";

interface CreatePhotoData {
  albumId: string;
  previewUrl: string;
  highResUrl?: string;
}

export const createPhoto = async (
  data: CreatePhotoData,
  photographerId: string
) => {

  const {
    albumId,
    previewUrl,
    highResUrl,
  } = data;


  const album = await prisma.album.findUnique({
    where: {
      id: albumId,
    },
  });


  if (!album) {
    throw new Error("Album not found");
  }


  if (album.photographerId !== photographerId) {
    throw new Error(
      "You are not allowed to upload photo to this album"
    );
  }


  const photo = await prisma.photo.create({
    data: {
      albumId,
      previewUrl,
      highResUrl,
    },
  });


  return photo;
};

export const getPhotosByAlbum = async (
  albumId: string,
  photographerId: string
) => {

  const album = await prisma.album.findUnique({
    where: {
      id: albumId,
    },
  });


  if (!album) {
    throw new Error("Album not found");
  }


  if (album.photographerId !== photographerId) {
    throw new Error(
      "You are not allowed to access this album"
    );
  }


  const photos = await prisma.photo.findMany({
    where: {
      albumId,
    },
  });


  return photos;
};