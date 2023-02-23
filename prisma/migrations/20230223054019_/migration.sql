-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_masposition1_id_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_masposition2_id_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_masposition3_id_fkey";

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "masposition1_id" DROP NOT NULL,
ALTER COLUMN "masposition2_id" DROP NOT NULL,
ALTER COLUMN "masposition3_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_masposition1_id_fkey" FOREIGN KEY ("masposition1_id") REFERENCES "mas_positionlevel1"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_masposition2_id_fkey" FOREIGN KEY ("masposition2_id") REFERENCES "mas_positionlevel2"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_masposition3_id_fkey" FOREIGN KEY ("masposition3_id") REFERENCES "mas_positionlevel3"("id") ON DELETE SET NULL ON UPDATE CASCADE;
