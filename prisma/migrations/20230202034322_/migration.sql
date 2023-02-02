/*
  Warnings:

  - You are about to drop the column `base_salary` on the `salary` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `salary` table. All the data in the column will be lost.
  - You are about to drop the `all_collect` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `base_salary` to the `bookbank_log` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "all_collect" DROP CONSTRAINT "all_collect_userId_fkey";

-- DropForeignKey
ALTER TABLE "bookbank_log" DROP CONSTRAINT "bookbank_log_all_collectId_fkey";

-- AlterTable
ALTER TABLE "bookbank_log" ADD COLUMN     "base_salary" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "salary" DROP COLUMN "base_salary",
DROP COLUMN "date",
ADD COLUMN     "bookbank_logId" UUID,
ADD COLUMN     "mas_monthId" UUID,
ADD COLUMN     "mas_yearsId" UUID;

-- DropTable
DROP TABLE "all_collect";

-- CreateTable
CREATE TABLE "mas_all_collect" (
    "id" UUID NOT NULL,
    "userId" UUID,
    "income_collect" INTEGER NOT NULL,
    "vat_collect" INTEGER NOT NULL,
    "social_secu_collect" INTEGER NOT NULL,
    "provident_collect_employee" INTEGER NOT NULL,
    "provident_collect_company" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "provident_log" (
    "id" UUID NOT NULL,
    "userId" UUID,
    "date" TIMESTAMP(3) NOT NULL,
    "pro_employee" INTEGER NOT NULL,
    "pro_company" INTEGER NOT NULL,
    "mas_all_collectId" UUID
);

-- CreateIndex
CREATE UNIQUE INDEX "mas_all_collect_id_key" ON "mas_all_collect"("id");

-- CreateIndex
CREATE UNIQUE INDEX "provident_log_id_key" ON "provident_log"("id");

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_bookbank_logId_fkey" FOREIGN KEY ("bookbank_logId") REFERENCES "bookbank_log"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_mas_monthId_fkey" FOREIGN KEY ("mas_monthId") REFERENCES "mas_month"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_mas_yearsId_fkey" FOREIGN KEY ("mas_yearsId") REFERENCES "mas_years"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mas_all_collect" ADD CONSTRAINT "mas_all_collect_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provident_log" ADD CONSTRAINT "provident_log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provident_log" ADD CONSTRAINT "provident_log_mas_all_collectId_fkey" FOREIGN KEY ("mas_all_collectId") REFERENCES "mas_all_collect"("id") ON DELETE SET NULL ON UPDATE CASCADE;
