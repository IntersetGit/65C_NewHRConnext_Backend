-- CreateTable
CREATE TABLE "provident_log" (
    "id" UUID NOT NULL,
    "userId" UUID,
    "provident_date" TIMESTAMP(3),
    "pro_employee" DOUBLE PRECISION,
    "pro_company" DOUBLE PRECISION,
    "mas_all_collectId" UUID,
    "bookbank_logId" UUID
);

-- CreateIndex
CREATE UNIQUE INDEX "provident_log_id_key" ON "provident_log"("id");

-- AddForeignKey
ALTER TABLE "provident_log" ADD CONSTRAINT "provident_log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provident_log" ADD CONSTRAINT "provident_log_mas_all_collectId_fkey" FOREIGN KEY ("mas_all_collectId") REFERENCES "mas_all_collect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provident_log" ADD CONSTRAINT "provident_log_bookbank_logId_fkey" FOREIGN KEY ("bookbank_logId") REFERENCES "bookbank_log"("id") ON DELETE SET NULL ON UPDATE CASCADE;
