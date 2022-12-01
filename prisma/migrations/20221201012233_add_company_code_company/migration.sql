/*
  Warnings:

  - A unique constraint covering the columns `[companyCode]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyCode` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "companyCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Company_companyCode_key" ON "Company"("companyCode");
