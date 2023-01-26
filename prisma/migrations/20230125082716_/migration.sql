/*
  Warnings:

  - You are about to drop the column `mas_position_Id` on the `mas_positionlevel1` table. All the data in the column will be lost.
  - You are about to drop the column `mas_position_Id` on the `mas_positionlevel2` table. All the data in the column will be lost.
  - You are about to drop the column `mas_position_Id` on the `mas_positionlevel3` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "mas_positionlevel1" DROP CONSTRAINT "mas_positionlevel1_mas_position_Id_fkey";

-- DropForeignKey
ALTER TABLE "mas_positionlevel2" DROP CONSTRAINT "mas_positionlevel2_mas_position_Id_fkey";

-- DropForeignKey
ALTER TABLE "mas_positionlevel3" DROP CONSTRAINT "mas_positionlevel3_mas_position_Id_fkey";

-- AlterTable
ALTER TABLE "mas_positionlevel1" DROP COLUMN "mas_position_Id";

-- AlterTable
ALTER TABLE "mas_positionlevel2" DROP COLUMN "mas_position_Id";

-- AlterTable
ALTER TABLE "mas_positionlevel3" DROP COLUMN "mas_position_Id";
