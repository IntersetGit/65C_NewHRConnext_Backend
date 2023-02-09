/*
  Warnings:

  - Changed the type of `quantity_day` on the `data_leave` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "data_leave" DROP COLUMN "quantity_day",
ADD COLUMN     "quantity_day" INTEGER NOT NULL;
