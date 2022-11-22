/*
  Warnings:

  - A unique constraint covering the columns `[staff_code]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "address" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "religion" TEXT,
ADD COLUMN     "staff_code" TEXT,
ADD COLUMN     "tel" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_staff_code_key" ON "Profile"("staff_code");
