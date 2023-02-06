-- DropForeignKey
ALTER TABLE "salary" DROP CONSTRAINT "salary_provident_logId_fkey";

-- AlterTable
ALTER TABLE "provident_log" ADD COLUMN     "salaryId" UUID;

-- AddForeignKey
ALTER TABLE "provident_log" ADD CONSTRAINT "provident_log_salaryId_fkey" FOREIGN KEY ("salaryId") REFERENCES "salary"("id") ON DELETE SET NULL ON UPDATE CASCADE;
