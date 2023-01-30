/*
  Warnings:

  - You are about to drop the column `date` on the `holiday_date` table. All the data in the column will be lost.
  - Added the required column `day` to the `holiday_date` table without a default value. This is not possible if the table is not empty.
  - Added the required column `month` to the `holiday_date` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yaer` to the `holiday_date` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "holiday_date" DROP COLUMN "date",
ADD COLUMN     "day" INTEGER NOT NULL,
ADD COLUMN     "month" INTEGER NOT NULL,
ADD COLUMN     "yaer" INTEGER NOT NULL;
