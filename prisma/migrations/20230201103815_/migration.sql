-- AlterTable
ALTER TABLE "salary" ADD COLUMN     "userId" UUID;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
