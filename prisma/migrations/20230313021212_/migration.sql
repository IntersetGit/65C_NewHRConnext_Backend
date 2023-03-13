/*
  Warnings:

  - You are about to drop the column `salary_logId` on the `salary` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "salary" DROP CONSTRAINT "salary_salary_logId_fkey";

-- AlterTable
ALTER TABLE "salary" DROP COLUMN "salary_logId";

-- AlterTable
ALTER TABLE "salary_log" ADD COLUMN     "salaryId" UUID;

-- AddForeignKey
ALTER TABLE "salary_log" ADD CONSTRAINT "salary_log_salaryId_fkey" FOREIGN KEY ("salaryId") REFERENCES "salary"("id") ON DELETE SET NULL ON UPDATE CASCADE;
