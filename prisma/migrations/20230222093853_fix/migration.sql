/*
  Warnings:

  - The `accept_month` column on the `bookbank_log` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `accept_years` column on the `bookbank_log` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "bookbank_log" DROP COLUMN "accept_month",
ADD COLUMN     "accept_month" INTEGER,
DROP COLUMN "accept_years",
ADD COLUMN     "accept_years" INTEGER;
