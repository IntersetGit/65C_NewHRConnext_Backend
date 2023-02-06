/*
  Warnings:

  - Added the required column `date` to the `expense_company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookbank_log" ADD COLUMN     "provident_com" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "provident_emp" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "expense_company" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "mas_all_collect" ALTER COLUMN "income_collect" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "vat_collect" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "social_secu_collect" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "provident_collect_employee" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "provident_collect_company" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "salary" ADD COLUMN     "mas_salary_statusId" UUID;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_mas_salary_statusId_fkey" FOREIGN KEY ("mas_salary_statusId") REFERENCES "mas_salary_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;
