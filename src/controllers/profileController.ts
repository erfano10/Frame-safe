import { Request, Response } from "express";
import {
  getProfile,
  updateProfile,
} from "../services/profileService";


export const getProfileController = async (
  req: Request,
  res: Response
) => {
  try {
    const user = req.user as {
      id: string;
      role: string;
    };

    const profile = await getProfile(user.id);

    return res.status(200).json({
      success: true,
      data: profile,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to get profile",
    });
  }
};



export const updateProfileController = async (
  req: Request,
  res: Response
) => {
  try {
    const user = req.user as {
      id: string;
      role: string;
    };

    const profile = await updateProfile(
      user.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: profile,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};