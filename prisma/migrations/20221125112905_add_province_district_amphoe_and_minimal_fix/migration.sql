-- DropForeignKey
ALTER TABLE "Position" DROP CONSTRAINT "Position_companyId_fkey";

-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "icon" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Position" ALTER COLUMN "companyId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Province" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "District" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "provinceId" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "Amphoe" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "districtId" UUID NOT NULL,
    "zipcode" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Province_id_key" ON "Province"("id");

-- CreateIndex
CREATE UNIQUE INDEX "District_id_key" ON "District"("id");

-- CreateIndex
CREATE UNIQUE INDEX "District_provinceId_key" ON "District"("provinceId");

-- CreateIndex
CREATE UNIQUE INDEX "Amphoe_id_key" ON "Amphoe"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Amphoe_districtId_key" ON "Amphoe"("districtId");

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amphoe" ADD CONSTRAINT "Amphoe_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
