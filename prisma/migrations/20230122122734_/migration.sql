/*
  Warnings:

  - You are about to drop the `Posotionlevel1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Posotionlevel2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Posotionlevel3` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Position_user" DROP CONSTRAINT "Position_user_position1_id_fkey";

-- DropForeignKey
ALTER TABLE "Position_user" DROP CONSTRAINT "Position_user_position2_id_fkey";

-- DropForeignKey
ALTER TABLE "Position_user" DROP CONSTRAINT "Position_user_position3_id_fkey";

-- DropForeignKey
ALTER TABLE "Posotionlevel1" DROP CONSTRAINT "Posotionlevel1_CompanyId_fkey";

-- DropForeignKey
ALTER TABLE "Posotionlevel2" DROP CONSTRAINT "Posotionlevel2_CompanyId_fkey";

-- DropForeignKey
ALTER TABLE "Posotionlevel2" DROP CONSTRAINT "Posotionlevel2_posotionlevel1_id_fkey";

-- DropForeignKey
ALTER TABLE "Posotionlevel3" DROP CONSTRAINT "Posotionlevel3_CompanyId_fkey";

-- DropForeignKey
ALTER TABLE "Posotionlevel3" DROP CONSTRAINT "Posotionlevel3_posotionlevel2_id_fkey";

-- DropTable
DROP TABLE "Posotionlevel1";

-- DropTable
DROP TABLE "Posotionlevel2";

-- DropTable
DROP TABLE "Posotionlevel3";

-- CreateTable
CREATE TABLE "mas_Posotionlevel1" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "CompanyId" UUID
);

-- CreateTable
CREATE TABLE "mas_Posotionlevel2" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "posotionlevel1_id" UUID,
    "CompanyId" UUID
);

-- CreateTable
CREATE TABLE "mas_Posotionlevel3" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "posotionlevel2_id" UUID,
    "CompanyId" UUID
);

-- CreateIndex
CREATE UNIQUE INDEX "mas_Posotionlevel1_id_key" ON "mas_Posotionlevel1"("id");

-- CreateIndex
CREATE UNIQUE INDEX "mas_Posotionlevel2_id_key" ON "mas_Posotionlevel2"("id");

-- CreateIndex
CREATE UNIQUE INDEX "mas_Posotionlevel3_id_key" ON "mas_Posotionlevel3"("id");

-- AddForeignKey
ALTER TABLE "mas_Posotionlevel1" ADD CONSTRAINT "mas_Posotionlevel1_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mas_Posotionlevel2" ADD CONSTRAINT "mas_Posotionlevel2_posotionlevel1_id_fkey" FOREIGN KEY ("posotionlevel1_id") REFERENCES "mas_Posotionlevel1"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mas_Posotionlevel2" ADD CONSTRAINT "mas_Posotionlevel2_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mas_Posotionlevel3" ADD CONSTRAINT "mas_Posotionlevel3_posotionlevel2_id_fkey" FOREIGN KEY ("posotionlevel2_id") REFERENCES "mas_Posotionlevel2"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mas_Posotionlevel3" ADD CONSTRAINT "mas_Posotionlevel3_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_user" ADD CONSTRAINT "Position_user_position1_id_fkey" FOREIGN KEY ("position1_id") REFERENCES "mas_Posotionlevel1"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_user" ADD CONSTRAINT "Position_user_position2_id_fkey" FOREIGN KEY ("position2_id") REFERENCES "mas_Posotionlevel2"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_user" ADD CONSTRAINT "Position_user_position3_id_fkey" FOREIGN KEY ("position3_id") REFERENCES "mas_Posotionlevel3"("id") ON DELETE SET NULL ON UPDATE CASCADE;
