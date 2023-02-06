/*
  Warnings:

  - You are about to drop the `provident_log` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "provident_log" DROP CONSTRAINT "provident_log_bookbank_logId_fkey";

-- DropForeignKey
ALTER TABLE "provident_log" DROP CONSTRAINT "provident_log_mas_all_collectId_fkey";

-- DropForeignKey
ALTER TABLE "provident_log" DROP CONSTRAINT "provident_log_userId_fkey";

-- DropTable
DROP TABLE "provident_log";
