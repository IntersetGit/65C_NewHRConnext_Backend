-- AlterTable
ALTER TABLE "salary" ADD COLUMN     "mas_bankId" UUID;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_mas_bankId_fkey" FOREIGN KEY ("mas_bankId") REFERENCES "mas_bank"("id") ON DELETE SET NULL ON UPDATE CASCADE;
