/*
  Warnings:

  - You are about to drop the column `BusinesstypeId` on the `CompanyBranch` table. All the data in the column will be lost.
  - You are about to drop the column `main_company_type` on the `CompanyBranch` table. All the data in the column will be lost.
  - You are about to drop the column `sub_company_type` on the `CompanyBranch` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompanyBranch" DROP CONSTRAINT "CompanyBranch_BusinesstypeId_fkey";

-- AlterTable
ALTER TABLE "CompanyBranch" DROP COLUMN "BusinesstypeId",
DROP COLUMN "main_company_type",
DROP COLUMN "sub_company_type",
ADD COLUMN     "main_business_id" UUID,
ADD COLUMN     "sub_company_typeId" UUID;

-- AddForeignKey
ALTER TABLE "CompanyBranch" ADD CONSTRAINT "CompanyBranch_sub_company_typeId_fkey" FOREIGN KEY ("sub_company_typeId") REFERENCES "SubBusinessType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyBranch" ADD CONSTRAINT "CompanyBranch_main_business_id_fkey" FOREIGN KEY ("main_business_id") REFERENCES "MainBusinessType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
