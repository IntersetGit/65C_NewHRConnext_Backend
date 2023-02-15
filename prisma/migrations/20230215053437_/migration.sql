/*
  Warnings:

  - You are about to drop the column `updtedBy` on the `log_positionn` table. All the data in the column will be lost.
  - You are about to drop the column `updteddate` on the `log_positionn` table. All the data in the column will be lost.
  - Added the required column `detail` to the `log_positionn` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "log_positionn" DROP CONSTRAINT "log_positionn_updtedBy_fkey";

-- AlterTable
ALTER TABLE "log_positionn" DROP COLUMN "updtedBy",
DROP COLUMN "updteddate",
ADD COLUMN     "detail" TEXT NOT NULL;
