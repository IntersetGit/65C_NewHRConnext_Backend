-- DropForeignKey
ALTER TABLE "CompanyBranch" DROP CONSTRAINT "CompanyBranch_BusinesstypeId_fkey";

-- AlterTable
ALTER TABLE "CompanyBranch" ALTER COLUMN "BusinesstypeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CompanyBranch" ADD CONSTRAINT "CompanyBranch_BusinesstypeId_fkey" FOREIGN KEY ("BusinesstypeId") REFERENCES "MainBusinessType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
