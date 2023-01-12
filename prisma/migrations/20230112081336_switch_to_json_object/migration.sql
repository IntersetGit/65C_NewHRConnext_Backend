/*
  Warnings:

  - The `access` column on the `Role_Company` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Role_Company" DROP COLUMN "access",
ADD COLUMN     "access" JSONB[];
