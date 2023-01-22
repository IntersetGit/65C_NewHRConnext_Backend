/*
  Warnings:

  - You are about to drop the `mas_Posotionlevel1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mas_Posotionlevel2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mas_Posotionlevel3` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Position_user" DROP CONSTRAINT "Position_user_position1_id_fkey";

-- DropForeignKey
ALTER TABLE "Position_user" DROP CONSTRAINT "Position_user_position2_id_fkey";

-- DropForeignKey
ALTER TABLE "Position_user" DROP CONSTRAINT "Position_user_position3_id_fkey";

-- DropForeignKey
ALTER TABLE "mas_Posotionlevel1" DROP CONSTRAINT "mas_Posotionlevel1_CompanyId_fkey";

-- DropForeignKey
ALTER TABLE "mas_Posotionlevel2" DROP CONSTRAINT "mas_Posotionlevel2_CompanyId_fkey";

-- DropForeignKey
ALTER TABLE "mas_Posotionlevel2" DROP CONSTRAINT "mas_Posotionlevel2_posotionlevel1_id_fkey";

-- DropForeignKey
ALTER TABLE "mas_Posotionlevel3" DROP CONSTRAINT "mas_Posotionlevel3_CompanyId_fkey";

-- DropForeignKey
ALTER TABLE "mas_Posotionlevel3" DROP CONSTRAINT "mas_Posotionlevel3_posotionlevel2_id_fkey";

-- DropTable
DROP TABLE "mas_Posotionlevel1";

-- DropTable
DROP TABLE "mas_Posotionlevel2";

-- DropTable
DROP TABLE "mas_Posotionlevel3";

-- CreateTable
CREATE TABLE "mas_positionlevel1" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "CompanyId" UUID
);

-- CreateTable
CREATE TABLE "mas_positionlevel2" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "positionlevel1_id" UUID,
    "CompanyId" UUID
);

-- CreateTable
CREATE TABLE "mas_positionlevel3" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "positionlevel2_id" UUID,
    "CompanyId" UUID
);

-- CreateIndex
CREATE UNIQUE INDEX "mas_positionlevel1_id_key" ON "mas_positionlevel1"("id");

-- CreateIndex
CREATE UNIQUE INDEX "mas_positionlevel2_id_key" ON "mas_positionlevel2"("id");

-- CreateIndex
CREATE UNIQUE INDEX "mas_positionlevel3_id_key" ON "mas_positionlevel3"("id");

-- AddForeignKey
ALTER TABLE "mas_positionlevel1" ADD CONSTRAINT "mas_positionlevel1_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mas_positionlevel2" ADD CONSTRAINT "mas_positionlevel2_positionlevel1_id_fkey" FOREIGN KEY ("positionlevel1_id") REFERENCES "mas_positionlevel1"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mas_positionlevel2" ADD CONSTRAINT "mas_positionlevel2_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mas_positionlevel3" ADD CONSTRAINT "mas_positionlevel3_positionlevel2_id_fkey" FOREIGN KEY ("positionlevel2_id") REFERENCES "mas_positionlevel2"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mas_positionlevel3" ADD CONSTRAINT "mas_positionlevel3_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_user" ADD CONSTRAINT "Position_user_position1_id_fkey" FOREIGN KEY ("position1_id") REFERENCES "mas_positionlevel1"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_user" ADD CONSTRAINT "Position_user_position2_id_fkey" FOREIGN KEY ("position2_id") REFERENCES "mas_positionlevel2"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_user" ADD CONSTRAINT "Position_user_position3_id_fkey" FOREIGN KEY ("position3_id") REFERENCES "mas_positionlevel3"("id") ON DELETE SET NULL ON UPDATE CASCADE;
