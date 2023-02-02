-- AlterTable
ALTER TABLE "bookbank_log" ADD COLUMN     "userId" UUID;

-- AddForeignKey
ALTER TABLE "bookbank_log" ADD CONSTRAINT "bookbank_log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
