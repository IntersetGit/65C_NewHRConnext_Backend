-- DropForeignKey
ALTER TABLE "expense_company" DROP CONSTRAINT "expense_company_bankId_fkey";

-- DropForeignKey
ALTER TABLE "expense_company" DROP CONSTRAINT "expense_company_monthId_fkey";

-- AlterTable
ALTER TABLE "expense_company" ALTER COLUMN "monthId" DROP NOT NULL,
ALTER COLUMN "bankId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "expense_company" ADD CONSTRAINT "expense_company_monthId_fkey" FOREIGN KEY ("monthId") REFERENCES "mas_month"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_company" ADD CONSTRAINT "expense_company_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "mas_bank"("id") ON DELETE SET NULL ON UPDATE CASCADE;
