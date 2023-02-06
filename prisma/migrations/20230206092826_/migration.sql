/*
  Warnings:

  - Made the column `income_collect` on table `mas_all_collect` required. This step will fail if there are existing NULL values in that column.
  - Made the column `social_secu_collect` on table `mas_all_collect` required. This step will fail if there are existing NULL values in that column.
  - Made the column `provident_collect_employee` on table `mas_all_collect` required. This step will fail if there are existing NULL values in that column.
  - Made the column `provident_collect_company` on table `mas_all_collect` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "mas_all_collect" ALTER COLUMN "income_collect" SET NOT NULL,
ALTER COLUMN "social_secu_collect" SET NOT NULL,
ALTER COLUMN "provident_collect_employee" SET NOT NULL,
ALTER COLUMN "provident_collect_company" SET NOT NULL;
