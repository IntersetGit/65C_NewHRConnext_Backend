/*
  Warnings:

  - You are about to drop the column `holiday_yearID` on the `holiday_date` table. All the data in the column will be lost.
  - You are about to drop the column `yaer` on the `holiday_date` table. All the data in the column will be lost.
  - Added the required column `year` to the `holiday_date` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "holiday_date" DROP CONSTRAINT "holiday_date_holiday_yearID_fkey";

-- AlterTable
ALTER TABLE "holiday_date" DROP COLUMN "holiday_yearID",
DROP COLUMN "yaer",
ADD COLUMN     "year" INTEGER NOT NULL;
