/*
  Warnings:

  - Added the required column `bank_code` to the `mas_bank` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mas_bank" ADD COLUMN     "bank_code" TEXT NOT NULL;
