/*
  Warnings:

  - You are about to drop the column `mas_monthId` on the `salary` table. All the data in the column will be lost.
  - You are about to drop the column `mas_yearsId` on the `salary` table. All the data in the column will be lost.
  - You are about to drop the column `salaryYears` on the `salary` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "salary" DROP CONSTRAINT "salary_mas_monthId_fkey";

-- DropForeignKey
ALTER TABLE "salary" DROP CONSTRAINT "salary_mas_yearsId_fkey";

-- AlterTable
ALTER TABLE "salary" DROP COLUMN "mas_monthId",
DROP COLUMN "mas_yearsId",
DROP COLUMN "salaryYears",
ADD COLUMN     "month" TEXT,
ADD COLUMN     "socialYears" DOUBLE PRECISION,
ADD COLUMN     "years" TEXT;
