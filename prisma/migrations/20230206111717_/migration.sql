/*
  Warnings:

  - A unique constraint covering the columns `[id,userId]` on the table `mas_all_collect` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `mas_all_collect` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "mas_all_collect" DROP CONSTRAINT "mas_all_collect_userId_fkey";

-- AlterTable
ALTER TABLE "mas_all_collect" ALTER COLUMN "userId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "mas_all_collect_id_userId_key" ON "mas_all_collect"("id", "userId");

-- AddForeignKey
ALTER TABLE "mas_all_collect" ADD CONSTRAINT "mas_all_collect_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
