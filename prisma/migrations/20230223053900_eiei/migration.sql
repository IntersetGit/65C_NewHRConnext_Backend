/*
  Warnings:

  - Added the required column `masposition1_id` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `masposition2_id` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `masposition3_id` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "masposition1_id" UUID NOT NULL,
ADD COLUMN     "masposition2_id" UUID NOT NULL,
ADD COLUMN     "masposition3_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "expense_company" ADD COLUMN     "unix" INTEGER;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_masposition1_id_fkey" FOREIGN KEY ("masposition1_id") REFERENCES "mas_positionlevel1"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_masposition2_id_fkey" FOREIGN KEY ("masposition2_id") REFERENCES "mas_positionlevel2"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_masposition3_id_fkey" FOREIGN KEY ("masposition3_id") REFERENCES "mas_positionlevel3"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
