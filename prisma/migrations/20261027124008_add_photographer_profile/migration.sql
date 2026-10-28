-- CreateTable
CREATE TABLE "PhotographerProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "brandName" TEXT,
    "bio" TEXT,
    "instagram" TEXT,
    "whatsapp" TEXT,
    "qrisUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PhotographerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PhotographerProfile_userId_key" ON "PhotographerProfile"("userId");

-- AddForeignKey
ALTER TABLE "PhotographerProfile" ADD CONSTRAINT "PhotographerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
