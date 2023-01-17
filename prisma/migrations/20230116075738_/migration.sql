-- CreateTable
CREATE TABLE "Posotion" (
    "id" UUID NOT NULL,
    "detail" JSONB[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Posotion_id_key" ON "Posotion"("id");
