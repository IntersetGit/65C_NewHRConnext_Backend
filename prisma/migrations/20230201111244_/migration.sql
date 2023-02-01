/*
  Warnings:

  - Added the required column `status` to the `holiday_date` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "holiday_date" ADD COLUMN     "holiday_yearID" UUID,
ADD COLUMN     "status" SMALLINT NOT NULL;

-- AddForeignKey
ALTER TABLE "holiday_date" ADD CONSTRAINT "holiday_date_holiday_yearID_fkey" FOREIGN KEY ("holiday_yearID") REFERENCES "holiday_year"("id") ON DELETE SET NULL ON UPDATE CASCADE;
