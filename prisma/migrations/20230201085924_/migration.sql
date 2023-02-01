-- CreateTable
CREATE TABLE "mas_bank" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "mas_month" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "mas_years" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "mas_salary_status" (
    "id" UUID NOT NULL,
    "no" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "mas_bank_id_key" ON "mas_bank"("id");

-- CreateIndex
CREATE UNIQUE INDEX "mas_month_id_key" ON "mas_month"("id");

-- CreateIndex
CREATE UNIQUE INDEX "mas_years_id_key" ON "mas_years"("id");

-- CreateIndex
CREATE UNIQUE INDEX "mas_salary_status_id_key" ON "mas_salary_status"("id");
