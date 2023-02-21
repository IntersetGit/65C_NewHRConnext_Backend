/*
  Warnings:

  - Added the required column `accept_date` to the `bookbank_log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookbank_log" ADD COLUMN     "accept_date" TIMESTAMP(3) NOT NULL;
