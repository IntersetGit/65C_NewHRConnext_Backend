/*
  Warnings:

  - You are about to drop the column `detail_leave` on the `data_leave` table. All the data in the column will be lost.
  - Made the column `Status` on table `data_leave` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "data_leave" DROP COLUMN "detail_leave",
ALTER COLUMN "Status" SET NOT NULL;
