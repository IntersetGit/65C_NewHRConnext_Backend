/*
  Warnings:

  - You are about to drop the column `headder` on the `Position_user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Position_user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Position_user" DROP COLUMN "headder",
ADD COLUMN     "headderId" UUID;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "start_date_work" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "Position_user_user_id_key" ON "Position_user"("user_id");

-- AddForeignKey
ALTER TABLE "Position_user" ADD CONSTRAINT "Position_user_headderId_fkey" FOREIGN KEY ("headderId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
