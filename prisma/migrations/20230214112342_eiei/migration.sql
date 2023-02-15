/*
  Warnings:

  - Added the required column `BusinesstypeId` to the `CompanyBranch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CompanyBranch" ADD COLUMN     "BusinesstypeId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "MainBusinessType" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SubBusinessType" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "MainBId" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MainBusinessType_id_key" ON "MainBusinessType"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SubBusinessType_id_key" ON "SubBusinessType"("id");

-- AddForeignKey
ALTER TABLE "CompanyBranch" ADD CONSTRAINT "CompanyBranch_BusinesstypeId_fkey" FOREIGN KEY ("BusinesstypeId") REFERENCES "MainBusinessType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubBusinessType" ADD CONSTRAINT "SubBusinessType_MainBId_fkey" FOREIGN KEY ("MainBId") REFERENCES "MainBusinessType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
