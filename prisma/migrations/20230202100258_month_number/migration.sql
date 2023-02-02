/*
  Warnings:

  - Added the required column `ss_per` to the `salary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vatper` to the `salary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mas_month" ADD COLUMN     "month_number" SMALLINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "salary" ADD COLUMN     "ss_per" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vatper" DOUBLE PRECISION NOT NULL;
