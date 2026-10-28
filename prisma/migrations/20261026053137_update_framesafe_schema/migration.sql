/*
  Warnings:

  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "proofUrl" TEXT;

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "watermarkUrl" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "qrisUrl" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
