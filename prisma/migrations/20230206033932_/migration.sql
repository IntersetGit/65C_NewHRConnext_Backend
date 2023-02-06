-- AlterTable
ALTER TABLE "salary" ADD COLUMN     "mas_vat_socialsId" UUID;

-- CreateTable
CREATE TABLE "mas_vat_socials" (
    "id" UUID NOT NULL,
    "current_vat" DOUBLE PRECISION NOT NULL,
    "current_social" DOUBLE PRECISION NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "mas_vat_socials_id_key" ON "mas_vat_socials"("id");

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_mas_vat_socialsId_fkey" FOREIGN KEY ("mas_vat_socialsId") REFERENCES "mas_vat_socials"("id") ON DELETE SET NULL ON UPDATE CASCADE;
