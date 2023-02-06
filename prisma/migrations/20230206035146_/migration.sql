-- AlterTable
ALTER TABLE "salary" ADD COLUMN     "expense_companyId" UUID;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_expense_companyId_fkey" FOREIGN KEY ("expense_companyId") REFERENCES "expense_company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
