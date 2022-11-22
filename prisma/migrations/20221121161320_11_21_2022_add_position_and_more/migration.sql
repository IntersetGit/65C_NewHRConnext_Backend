/*
  Warnings:

  - Added the required column `icon` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "positionId" UUID;

-- CreateTable
CREATE TABLE "Position" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "access" TEXT NOT NULL,
    "companyId" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Position_id_key" ON "Position"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Position_companyId_key" ON "Position"("companyId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
