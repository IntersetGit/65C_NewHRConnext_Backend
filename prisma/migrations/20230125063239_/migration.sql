/*
  Warnings:

  - Added the required column `code` to the `mas_positionlevel1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `mas_positionlevel1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `mas_positionlevel2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `mas_positionlevel2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `mas_positionlevel3` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `mas_positionlevel3` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mas_positionlevel1" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "mas_positionlevel2" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "mas_positionlevel3" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
