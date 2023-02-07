/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `mas_all_collect` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "mas_all_collect_userId_key" ON "mas_all_collect"("userId");
