-- AlterTable
ALTER TABLE "salary" ADD COLUMN     "salary_logId" UUID;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_salary_logId_fkey" FOREIGN KEY ("salary_logId") REFERENCES "salary_log"("id") ON DELETE SET NULL ON UPDATE CASCADE;
