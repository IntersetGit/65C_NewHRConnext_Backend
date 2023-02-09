-- CreateTable
CREATE TABLE "holidayCompany" (
    "id" UUID NOT NULL,
    "CompanyId" UUID,
    "holiday_dateId" UUID,
    "holiday_yearId" UUID
);

-- CreateIndex
CREATE UNIQUE INDEX "holidayCompany_id_key" ON "holidayCompany"("id");

-- AddForeignKey
ALTER TABLE "holidayCompany" ADD CONSTRAINT "holidayCompany_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holidayCompany" ADD CONSTRAINT "holidayCompany_holiday_dateId_fkey" FOREIGN KEY ("holiday_dateId") REFERENCES "holiday_date"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holidayCompany" ADD CONSTRAINT "holidayCompany_holiday_yearId_fkey" FOREIGN KEY ("holiday_yearId") REFERENCES "holiday_year"("id") ON DELETE SET NULL ON UPDATE CASCADE;
