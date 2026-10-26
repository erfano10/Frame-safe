
import { prisma } from "../config/prisma";

export const getAllUser = async () => {
    return await prisma.user.findMany()
}