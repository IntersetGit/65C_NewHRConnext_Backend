/*
  Warnings:

  - You are about to drop the column `social_security` on the `expense_company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "expense_company" DROP COLUMN "social_security",
ADD COLUMN     "ss_per" DOUBLE PRECISION;
