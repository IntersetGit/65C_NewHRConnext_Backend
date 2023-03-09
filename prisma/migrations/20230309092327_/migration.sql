-- AlterTable
ALTER TABLE "provident_log" ADD COLUMN     "salary_logId" UUID;

-- CreateTable
CREATE TABLE "salary_log" (
    "id" UUID NOT NULL,
    "month" TEXT,
    "years" TEXT,
    "date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "base_salary" DOUBLE PRECISION,
    "commission" DOUBLE PRECISION,
    "position_income" DOUBLE PRECISION,
    "ot" DOUBLE PRECISION,
    "bonus" DOUBLE PRECISION,
    "special_income" DOUBLE PRECISION,
    "other_income" DOUBLE PRECISION,
    "travel_income" DOUBLE PRECISION,
    "bursary" DOUBLE PRECISION,
    "welfare_money" DOUBLE PRECISION,
    "vatper" DOUBLE PRECISION,
    "ss_per" DOUBLE PRECISION,
    "vat" DOUBLE PRECISION,
    "social_security" DOUBLE PRECISION,
    "miss" DOUBLE PRECISION,
    "ra" DOUBLE PRECISION,
    "late" DOUBLE PRECISION,
    "other" DOUBLE PRECISION,
    "provident_employee" DOUBLE PRECISION,
    "provident_company" DOUBLE PRECISION,
    "total_income" DOUBLE PRECISION,
    "total_expense" DOUBLE PRECISION,
    "net" DOUBLE PRECISION,
    "socialYears" DOUBLE PRECISION,
    "vatYears" DOUBLE PRECISION,
    "incomeYears" DOUBLE PRECISION,
    "create_by" UUID,
    "create_date" TIMESTAMP(3),
    "update_by" UUID,
    "update_date" TIMESTAMP(3),
    "userId" UUID,
    "mas_income_typeId" UUID,
    "bookbank_logId" UUID,
    "mas_salary_statusId" UUID,
    "mas_bankId" UUID,
    "mas_vat_socialsId" UUID,
    "expense_companyId" UUID,
    "provident_logId" UUID
);

-- CreateIndex
CREATE UNIQUE INDEX "salary_log_id_key" ON "salary_log"("id");

-- AddForeignKey
ALTER TABLE "salary_log" ADD CONSTRAINT "salary_log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary_log" ADD CONSTRAINT "salary_log_bookbank_logId_fkey" FOREIGN KEY ("bookbank_logId") REFERENCES "bookbank_log"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary_log" ADD CONSTRAINT "salary_log_mas_income_typeId_fkey" FOREIGN KEY ("mas_income_typeId") REFERENCES "mas_income_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary_log" ADD CONSTRAINT "salary_log_mas_salary_statusId_fkey" FOREIGN KEY ("mas_salary_statusId") REFERENCES "mas_salary_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary_log" ADD CONSTRAINT "salary_log_mas_bankId_fkey" FOREIGN KEY ("mas_bankId") REFERENCES "mas_bank"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary_log" ADD CONSTRAINT "salary_log_mas_vat_socialsId_fkey" FOREIGN KEY ("mas_vat_socialsId") REFERENCES "mas_vat_socials"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary_log" ADD CONSTRAINT "salary_log_expense_companyId_fkey" FOREIGN KEY ("expense_companyId") REFERENCES "expense_company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provident_log" ADD CONSTRAINT "provident_log_salary_logId_fkey" FOREIGN KEY ("salary_logId") REFERENCES "salary_log"("id") ON DELETE SET NULL ON UPDATE CASCADE;
