/*
  Warnings:

  - You are about to drop the column `leader` on the `Position_user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Position_user" DROP COLUMN "leader",
ADD COLUMN     "headder" UUID;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "blood_type" TEXT,
ADD COLUMN     "employee_status" TEXT,
ADD COLUMN     "nickname" VARCHAR(255);
