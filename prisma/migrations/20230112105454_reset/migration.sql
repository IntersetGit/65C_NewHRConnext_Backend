/*
  Warnings:

  - Changed the type of `access` on the `Role_Company` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Role_Company" DROP COLUMN "access",
ADD COLUMN     "access" JSONB NOT NULL;
