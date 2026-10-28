/*
  Warnings:

  - You are about to drop the column `qrisUrl` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "AlbumStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'COMPLETED');

-- AlterTable
ALTER TABLE "Album" ADD COLUMN     "status" "AlbumStatus" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "qrisUrl";
