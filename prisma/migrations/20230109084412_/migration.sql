/*
  Warnings:

  - Added the required column `status` to the `Role_Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Role_Company" ADD COLUMN     "status" INTEGER NOT NULL;
