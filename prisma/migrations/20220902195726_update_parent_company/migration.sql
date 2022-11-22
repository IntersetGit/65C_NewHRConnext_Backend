-- DropIndex
DROP INDEX "User_companyId_key";

-- DropIndex
DROP INDEX "User_roleId_key";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "parentId" UUID;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
