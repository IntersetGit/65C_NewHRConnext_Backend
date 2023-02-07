/*
  Warnings:

  - You are about to drop the column `yaer` on the `holiday_date` table. All the data in the column will be lost.
  - You are about to drop the `data_leave` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mas_leave_type` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Position_user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "data_leave" DROP CONSTRAINT "data_leave_leavetype_id_fkey";

-- DropForeignKey
ALTER TABLE "data_leave" DROP CONSTRAINT "data_leave_user_id_fkey";

-- AlterTable
ALTER TABLE "holiday_date" DROP COLUMN "yaer";

-- DropTable
DROP TABLE "data_leave";

-- DropTable
DROP TABLE "mas_leave_type";

-- CreateIndex
CREATE UNIQUE INDEX "Position_user_user_id_key" ON "Position_user"("user_id");
