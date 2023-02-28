-- CreateTable
CREATE TABLE "read_bookbank_log" (
    "id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "mas_bankId" UUID,
    "bank_number" VARCHAR(50) NOT NULL,
    "all_collectId" UUID,
    "base_salary" DOUBLE PRECISION,
    "provident_com" DOUBLE PRECISION DEFAULT 0,
    "provident_emp" DOUBLE PRECISION DEFAULT 0,
    "accept_date" TIMESTAMP(3) NOT NULL,
    "accept_month" INTEGER,
    "accept_years" INTEGER,
    "unix" INTEGER,
    "update_by" TEXT,
    "update_date" TIMESTAMP(3),
    "userId" UUID
);

-- CreateIndex
CREATE UNIQUE INDEX "read_bookbank_log_id_key" ON "read_bookbank_log"("id");

-- AddForeignKey
ALTER TABLE "read_bookbank_log" ADD CONSTRAINT "read_bookbank_log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
