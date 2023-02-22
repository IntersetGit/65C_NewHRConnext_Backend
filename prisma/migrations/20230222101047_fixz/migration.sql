/*
  Warnings:

  - The `unix` column on the `bookbank_log` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "bookbank_log" DROP COLUMN "unix",
ADD COLUMN     "unix" INTEGER;
