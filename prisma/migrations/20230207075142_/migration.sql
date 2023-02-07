/*
  Warnings:

  - You are about to drop the `master_leave_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "data_leave" DROP CONSTRAINT "data_leave_leavetype_id_fkey";

-- DropTable
DROP TABLE "master_leave_type";

-- CreateTable
CREATE TABLE "mas_leave_type" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "orderby" SMALLINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "mas_leave_type_id_key" ON "mas_leave_type"("id");

-- AddForeignKey
ALTER TABLE "data_leave" ADD CONSTRAINT "data_leave_leavetype_id_fkey" FOREIGN KEY ("leavetype_id") REFERENCES "mas_leave_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
