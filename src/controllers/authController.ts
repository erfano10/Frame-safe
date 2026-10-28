import { Request, Response } from "express";
import { registerUser , loginUser} from "../services/authService";

export const register = async (
  req: Request,
  res: Response
) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

export const login = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await loginUser(req.body);

    res.status(201).json({
      success: true,
      message: "Login successful",
      data: {
        id: result.user.id,
        name: result.user.name,
        email: result.user.email,
        role: result.user.role,
      },
      token: result.token,
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};