-- AlterTable
ALTER TABLE "provident_log" ADD COLUMN     "bookbank_logId" UUID;

-- AddForeignKey
ALTER TABLE "provident_log" ADD CONSTRAINT "provident_log_bookbank_logId_fkey" FOREIGN KEY ("bookbank_logId") REFERENCES "bookbank_log"("id") ON DELETE SET NULL ON UPDATE CASCADE;
