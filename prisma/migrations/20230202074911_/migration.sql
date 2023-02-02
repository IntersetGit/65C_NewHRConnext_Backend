/*
  Warnings:

  - Added the required column `status` to the `holiday_year` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "holiday_year" ADD COLUMN     "status" SMALLINT NOT NULL;
