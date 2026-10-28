import { Request, Response } from "express";
import { createAlbum,getAlbumsByPhotographer,getAlbumById, updateAlbum, deleteAlbum, updateAlbumStatus } from "../services/albumService";

export const createAlbumController = async (
  req: Request,
  res: Response
) => {
  try {
    const { title, clientName } = req.body;

    const user = req.user as {
      id: string;
      role: string;
    };

    const album = await createAlbum({
      title,
      clientName,
      photographerId: user.id,
    });

    return res.status(201).json({
      success: true,
      message: "Album created successfully",
      data: album,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create album",
    });
  }
};

export const getAlbumsController = async (
  req: Request,
  res: Response
) => {
  try {

    const user = req.user as {
      id: string;
      role: string;
    };

    const albums = await getAlbumsByPhotographer(
      user.id
    );

    return res.status(200).json({
      success: true,
      message: "Albums retrieved successfully",
      data: albums,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to get albums",
    });
  }
};

export const getAlbumDetailController = async (
  req: Request,
  res: Response
) => {
  try {
    const user = req.user as {
      id: string;
      role: string;
    };

    const album = await getAlbumById(
      req.params.id as string   ,
      user.id
    );

    if (!album) {
      return res.status(404).json({
        success: false,
        message: "Album not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: album,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to get album",
    });
  }
};

export const updateAlbumController = async (
  req: Request,
  res: Response
) => {

  try {

    const user = req.user as {
      id:string;
      role:string;
    };


    const album = await updateAlbum(
      req.params.id as string,
      user.id,
      req.body
    );


    return res.status(200).json({
      success:true,
      message:"Album updated successfully",
      data:album,
    });


  } catch(error:any){

    return res.status(400).json({
      success:false,
      message:error.message,
    });

  }
};

export const deleteAlbumController = async (
  req: Request,
  res: Response
) => {

  try {

    const user = req.user as {
      id:string;
      role:string;
    };


    const album = await deleteAlbum(
      req.params.id as string,
      user.id
    );


    return res.status(200).json({
      success:true,
      message:"Album deleted successfully",
      data:album,
    });


  } catch(error:any){

    return res.status(400).json({
      success:false,
      message:error.message,
    });

  }
};

export const updateAlbumStatusController = async (
  req: Request,
  res: Response
) => {

  try {

    const user = req.user as {
      id: string;
      role: string;
    };


    const album = await updateAlbumStatus(
      req.params.id as string,
      user.id,
      req.body
    );


    return res.status(200).json({
      success: true,
      message: "Album status updated successfully",
      data: album,
    });


  } catch (error: any) {

    return res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};