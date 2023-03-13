/*
  Warnings:

  - You are about to drop the column `mas_income_typeId` on the `salary` table. All the data in the column will be lost.
  - You are about to drop the column `mas_income_typeId` on the `salary_log` table. All the data in the column will be lost.
  - You are about to drop the `mas_income_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "salary" DROP CONSTRAINT "salary_mas_income_typeId_fkey";

-- DropForeignKey
ALTER TABLE "salary_log" DROP CONSTRAINT "salary_log_mas_income_typeId_fkey";

-- AlterTable
ALTER TABLE "salary" DROP COLUMN "mas_income_typeId";

-- AlterTable
ALTER TABLE "salary_log" DROP COLUMN "mas_income_typeId";

-- DropTable
DROP TABLE "mas_income_type";
