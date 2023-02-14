/*
  Warnings:

  - You are about to drop the `holidayCompany` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "holidayCompany" DROP CONSTRAINT "holidayCompany_CompanyId_fkey";

-- DropForeignKey
ALTER TABLE "holidayCompany" DROP CONSTRAINT "holidayCompany_holiday_dateId_fkey";

-- DropForeignKey
ALTER TABLE "holidayCompany" DROP CONSTRAINT "holidayCompany_holiday_yearId_fkey";

-- DropTable
DROP TABLE "holidayCompany";
