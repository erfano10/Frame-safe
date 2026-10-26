import { Request, Response } from "express"
import { getAllUser } from "../services/userService"

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUser()


    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: users,

    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })

  }

}