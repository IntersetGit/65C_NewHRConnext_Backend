/*
  Warnings:

  - You are about to drop the `Posotion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Posotion";

-- CreateTable
CREATE TABLE "Posotionlevel1" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "CompanyId" UUID
);

-- CreateTable
CREATE TABLE "Posotionlevel2" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "posotionlevel1_id" UUID,
    "CompanyId" UUID
);

-- CreateTable
CREATE TABLE "Posotionlevel3" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "posotionlevel2_id" UUID,
    "CompanyId" UUID
);

-- CreateTable
CREATE TABLE "Position_user" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "position1_id" UUID,
    "position2_id" UUID,
    "position3_id" UUID,
    "role" TEXT,
    "leader" TEXT
);

-- CreateTable
CREATE TABLE "holiday_date" (
    "id" UUID NOT NULL,
    "holiday_name" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "CompanyId" UUID
);

-- CreateIndex
CREATE UNIQUE INDEX "Posotionlevel1_id_key" ON "Posotionlevel1"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Posotionlevel2_id_key" ON "Posotionlevel2"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Posotionlevel3_id_key" ON "Posotionlevel3"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Position_user_id_key" ON "Position_user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "holiday_date_id_key" ON "holiday_date"("id");

-- AddForeignKey
ALTER TABLE "Posotionlevel1" ADD CONSTRAINT "Posotionlevel1_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posotionlevel2" ADD CONSTRAINT "Posotionlevel2_posotionlevel1_id_fkey" FOREIGN KEY ("posotionlevel1_id") REFERENCES "Posotionlevel1"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posotionlevel2" ADD CONSTRAINT "Posotionlevel2_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posotionlevel3" ADD CONSTRAINT "Posotionlevel3_posotionlevel2_id_fkey" FOREIGN KEY ("posotionlevel2_id") REFERENCES "Posotionlevel2"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posotionlevel3" ADD CONSTRAINT "Posotionlevel3_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_user" ADD CONSTRAINT "Position_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_user" ADD CONSTRAINT "Position_user_position1_id_fkey" FOREIGN KEY ("position1_id") REFERENCES "Posotionlevel1"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_user" ADD CONSTRAINT "Position_user_position2_id_fkey" FOREIGN KEY ("position2_id") REFERENCES "Posotionlevel2"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_user" ADD CONSTRAINT "Position_user_position3_id_fkey" FOREIGN KEY ("position3_id") REFERENCES "Posotionlevel3"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holiday_date" ADD CONSTRAINT "holiday_date_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
