-- AlterTable
ALTER TABLE "holiday_date" ADD COLUMN     "holiday_yearId" UUID;

-- AddForeignKey
ALTER TABLE "holiday_date" ADD CONSTRAINT "holiday_date_holiday_yearId_fkey" FOREIGN KEY ("holiday_yearId") REFERENCES "holiday_year"("id") ON DELETE SET NULL ON UPDATE CASCADE;
