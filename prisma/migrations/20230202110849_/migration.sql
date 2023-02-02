-- AlterTable
ALTER TABLE "salary" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "mas_income_typeId" UUID;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_mas_income_typeId_fkey" FOREIGN KEY ("mas_income_typeId") REFERENCES "mas_income_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
