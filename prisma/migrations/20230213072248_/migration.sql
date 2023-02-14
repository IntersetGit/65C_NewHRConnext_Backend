-- CreateTable
CREATE TABLE "data_leave" (
    "id" UUID NOT NULL,
    "leavetype_id" UUID NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "quantity_day" INTEGER NOT NULL,
    "quantity_hours" INTEGER NOT NULL,
    "detail_leave" TEXT NOT NULL,
    "Status" SMALLINT NOT NULL,
    "user_id" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "data_leave_id_key" ON "data_leave"("id");

-- AddForeignKey
ALTER TABLE "data_leave" ADD CONSTRAINT "data_leave_leavetype_id_fkey" FOREIGN KEY ("leavetype_id") REFERENCES "mas_leave_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_leave" ADD CONSTRAINT "data_leave_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;