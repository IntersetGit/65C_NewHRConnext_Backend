-- AlterTable
ALTER TABLE "salary" ADD COLUMN     "provident_logId" UUID;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_provident_logId_fkey" FOREIGN KEY ("provident_logId") REFERENCES "provident_log"("id") ON DELETE SET NULL ON UPDATE CASCADE;
