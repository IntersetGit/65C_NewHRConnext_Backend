/*
  Warnings:

  - You are about to drop the column `date` on the `provident_log` table. All the data in the column will be lost.
  - Added the required column `provident_date` to the `provident_log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "provident_log" DROP COLUMN "date",
ADD COLUMN     "provident_date" TIMESTAMP(3) NOT NULL;
