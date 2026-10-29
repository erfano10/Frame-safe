
import { Response, Request } from "express";
import { createPhoto, deletePhoto, getPhotosByAlbum } from "../services/photoService";
import { UpdatePhoto } from "../services/photoService";

export const createPhotoController = async (
  req: Request,
  res: Response
) => {

  try {

    const user = req.user as {
      id: string;
      role: string;
    };


    const photo = await createPhoto(
      req.body,
      user.id
    );


    return res.status(201).json({
      success: true,
      message: "Photo uploaded successfully",
      data: photo,
    });


  } catch (error: any) {

    return res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

export const getPhotosByAlbumController = async (
  req: Request,
  res: Response
) => {

  try {

    const user = req.user as {
      id: string;
      role: string;
    };


    const photos = await getPhotosByAlbum(
      req.params.albumId as string,
      user.id
    );


    return res.status(200).json({
      success: true,
      data: photos,
    });


  } catch (error: any) {

    return res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

export const updatePhotoController = async (
  req: Request,
  res: Response
) => {
  try {

    const user = req.user as {
      id: string;
      role: string;
    };

    const photo = await UpdatePhoto(
      req.params.id as string,
      req.body,
      user.id
    );

    return res.status(200).json({
      success: true,
      message: "Photo updated successfully",
      data: photo,
    });

  } catch (error: any) {

    return res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

export const deletePhotoController = async (
  req: Request,
  res: Response
) => {

  try {

    const user = req.user as {
      id: string;
      role: string;
    };


    const photo = await deletePhoto(
      req.params.id as string,
      user.id
    );


    return res.status(200).json({
      success: true,
      message: "Photo deleted successfully",
      data: photo,
    });


  } catch (error: any) {

    return res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

