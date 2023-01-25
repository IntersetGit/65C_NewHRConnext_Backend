-- CreateTable
CREATE TABLE "holiday_year" (
    "id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "holiday_name" VARCHAR(255)
);

-- CreateIndex
CREATE UNIQUE INDEX "holiday_year_id_key" ON "holiday_year"("id");
