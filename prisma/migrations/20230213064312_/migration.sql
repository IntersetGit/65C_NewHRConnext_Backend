/*
  Warnings:

  - Made the column `quantity_day` on table `data_leave` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity_hours` on table `data_leave` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "data_leave" ALTER COLUMN "quantity_day" SET NOT NULL,
ALTER COLUMN "quantity_hours" SET NOT NULL;
