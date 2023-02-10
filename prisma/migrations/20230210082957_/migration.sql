/*
  Warnings:

  - Added the required column `quantity_hours` to the `data_leave` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "data_leave" ADD COLUMN     "quantity_hours" INTEGER NOT NULL;
