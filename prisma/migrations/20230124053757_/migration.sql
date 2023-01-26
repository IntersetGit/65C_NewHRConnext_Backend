/*
  Warnings:

  - Added the required column `level` to the `mas_positionlevel1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mas_position_Id` to the `mas_positionlevel1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `mas_positionlevel2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mas_position_Id` to the `mas_positionlevel2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `mas_positionlevel3` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mas_position_Id` to the `mas_positionlevel3` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mas_positionlevel1" ADD COLUMN     "level" SMALLINT NOT NULL,
ADD COLUMN     "mas_position_Id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "mas_positionlevel2" ADD COLUMN     "level" SMALLINT NOT NULL,
ADD COLUMN     "mas_position_Id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "mas_positionlevel3" ADD COLUMN     "level" SMALLINT NOT NULL,
ADD COLUMN     "mas_position_Id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "mas_position" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "level" SMALLINT NOT NULL,
    "CompanyId" UUID
);

-- CreateIndex
CREATE UNIQUE INDEX "mas_position_id_key" ON "mas_position"("id");

-- AddForeignKey
ALTER TABLE "mas_position" ADD CONSTRAINT "mas_position_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mas_positionlevel1" ADD CONSTRAINT "mas_positionlevel1_mas_position_Id_fkey" FOREIGN KEY ("mas_position_Id") REFERENCES "mas_position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mas_positionlevel2" ADD CONSTRAINT "mas_positionlevel2_mas_position_Id_fkey" FOREIGN KEY ("mas_position_Id") REFERENCES "mas_position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mas_positionlevel3" ADD CONSTRAINT "mas_positionlevel3_mas_position_Id_fkey" FOREIGN KEY ("mas_position_Id") REFERENCES "mas_position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
