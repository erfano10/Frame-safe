import { prisma } from "../config/prisma";

interface CreateAlbumData {
  title: string;
  clientName: string;
  photographerId: string;
}

export const createAlbum = async (data: CreateAlbumData) => {
  const {
    title,
    clientName,
    photographerId,
  } = data;

  const album = await prisma.album.create({
    data: {
      title,
      clientName,
      photographerId,
    },
  });

  return album;
};

export const getAlbumsByPhotographer = async (
  photographerId: string
) => {
  const albums = await prisma.album.findMany({
    where: {
      photographerId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return albums;
};

export const getAlbumById = async (
  albumId: string,
  photographerId: string
) => {
  const album = await prisma.album.findFirst({
    where: {
      id: albumId,
      photographerId,
    },
    include: {
      photos: true,
    },
  });

  return album;
};

interface UpdateAlbumData {
  title?: string;
  clientName?: string;
}


export const updateAlbum = async (
  albumId: string,
  photographerId: string,
  data: UpdateAlbumData
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
    throw new Error("You are not allowed to update this album");
  }


  const updatedAlbum = await prisma.album.update({
    where: {
      id: albumId,
    },
    data,
  });


  return updatedAlbum;
};

export const deleteAlbum = async (
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
      "You are not allowed to delete this album"
    );
  }


  const deletedAlbum = await prisma.album.delete({
    where: {
      id: albumId,
    },
  });


  return deletedAlbum;
};

interface UpdateAlbumStatusData {
  status: "DRAFT" | "PUBLISHED" | "COMPLETED";
}


export const updateAlbumStatus = async (
  albumId: string,
  photographerId: string,
  data: UpdateAlbumStatusData
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
      "You are not allowed to update this album"
    );
  }


  const updatedAlbum = await prisma.album.update({
    where: {
      id: albumId,
    },
    data: {
      status: data.status,
    },
  });


  return updatedAlbum;
};