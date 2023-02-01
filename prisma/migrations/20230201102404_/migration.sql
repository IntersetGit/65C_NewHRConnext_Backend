-- CreateTable
CREATE TABLE "mas_income_type" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "expense_company" (
    "id" UUID NOT NULL,
    "monthId" UUID NOT NULL,
    "bankId" UUID NOT NULL,
    "vat_per" INTEGER,
    "social_security" INTEGER,
    "companyBranchId" UUID
);

-- CreateTable
CREATE TABLE "salary" (
    "id" UUID NOT NULL,
    "base_salary" INTEGER NOT NULL,
    "commission" INTEGER NOT NULL,
    "position_income" INTEGER NOT NULL,
    "ot" INTEGER NOT NULL,
    "bonus" INTEGER NOT NULL,
    "special_income" INTEGER NOT NULL,
    "other_income" INTEGER NOT NULL,
    "travel_income" INTEGER NOT NULL,
    "bursary" INTEGER NOT NULL,
    "welfare_money" INTEGER NOT NULL,
    "vat" INTEGER NOT NULL,
    "social_security" INTEGER NOT NULL,
    "miss" INTEGER NOT NULL,
    "ra" INTEGER NOT NULL,
    "late" INTEGER NOT NULL,
    "other" INTEGER NOT NULL,
    "provident_employee" INTEGER NOT NULL,
    "provident_company" INTEGER NOT NULL,
    "total_income" INTEGER NOT NULL,
    "total_expense" INTEGER NOT NULL,
    "net" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "all_collect" (
    "id" UUID NOT NULL,
    "userId" UUID,
    "income_collect" INTEGER NOT NULL,
    "vat_collect" INTEGER NOT NULL,
    "social_secu_collect" INTEGER NOT NULL,
    "provident_collect_employee" INTEGER NOT NULL,
    "provident_collect_company" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "bookbank_log" (
    "id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "mas_bankId" UUID,
    "bank_number" VARCHAR(50) NOT NULL,
    "all_collectId" UUID
);

-- CreateIndex
CREATE UNIQUE INDEX "mas_income_type_id_key" ON "mas_income_type"("id");

-- CreateIndex
CREATE UNIQUE INDEX "expense_company_id_key" ON "expense_company"("id");

-- CreateIndex
CREATE UNIQUE INDEX "salary_id_key" ON "salary"("id");

-- CreateIndex
CREATE UNIQUE INDEX "all_collect_id_key" ON "all_collect"("id");

-- CreateIndex
CREATE UNIQUE INDEX "bookbank_log_id_key" ON "bookbank_log"("id");

-- AddForeignKey
ALTER TABLE "expense_company" ADD CONSTRAINT "expense_company_monthId_fkey" FOREIGN KEY ("monthId") REFERENCES "mas_month"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_company" ADD CONSTRAINT "expense_company_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "mas_bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_company" ADD CONSTRAINT "expense_company_companyBranchId_fkey" FOREIGN KEY ("companyBranchId") REFERENCES "CompanyBranch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "all_collect" ADD CONSTRAINT "all_collect_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookbank_log" ADD CONSTRAINT "bookbank_log_all_collectId_fkey" FOREIGN KEY ("all_collectId") REFERENCES "all_collect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookbank_log" ADD CONSTRAINT "bookbank_log_mas_bankId_fkey" FOREIGN KEY ("mas_bankId") REFERENCES "mas_bank"("id") ON DELETE SET NULL ON UPDATE CASCADE;
