/*
  Warnings:

  - You are about to drop the column `watermarkUrl` on the `Photo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_albumId_fkey";

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "watermarkUrl";

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;
