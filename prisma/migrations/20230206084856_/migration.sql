/*
  Warnings:

  - Added the required column `date` to the `mas_all_collect` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mas_all_collect" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "income_collect" DROP NOT NULL,
ALTER COLUMN "vat_collect" DROP NOT NULL,
ALTER COLUMN "social_secu_collect" DROP NOT NULL,
ALTER COLUMN "provident_collect_employee" DROP NOT NULL,
ALTER COLUMN "provident_collect_company" DROP NOT NULL;
