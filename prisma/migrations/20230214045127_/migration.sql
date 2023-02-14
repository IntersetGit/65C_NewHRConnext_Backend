-- CreateTable
CREATE TABLE "log_positionn" (
    "id" UUID NOT NULL,
    "positionId" UUID NOT NULL,
    "cretedBy" UUID NOT NULL,
    "creteddate" TIMESTAMP(3) NOT NULL,
    "updtedBy" UUID NOT NULL,
    "updteddate" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "log_positionn_id_key" ON "log_positionn"("id");

-- AddForeignKey
ALTER TABLE "log_positionn" ADD CONSTRAINT "log_positionn_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_positionn" ADD CONSTRAINT "log_positionn_cretedBy_fkey" FOREIGN KEY ("cretedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_positionn" ADD CONSTRAINT "log_positionn_updtedBy_fkey" FOREIGN KEY ("updtedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
