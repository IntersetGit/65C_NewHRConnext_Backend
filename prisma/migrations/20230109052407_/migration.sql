/*
  Warnings:

  - You are about to drop the column `positionId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Position` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Position" DROP CONSTRAINT "Position_companyBranchId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_positionId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "positionId",
ADD COLUMN     "RoleCompanyID" UUID;

-- DropTable
DROP TABLE "Position";

-- CreateTable
CREATE TABLE "Role_Company" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "access" JSONB NOT NULL,
    "companyBranchId" UUID
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_Company_id_key" ON "Role_Company"("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_RoleCompanyID_fkey" FOREIGN KEY ("RoleCompanyID") REFERENCES "Role_Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role_Company" ADD CONSTRAINT "Role_Company_companyBranchId_fkey" FOREIGN KEY ("companyBranchId") REFERENCES "CompanyBranch"("id") ON DELETE SET NULL ON UPDATE CASCADE;
