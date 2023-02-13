-- AlterTable
ALTER TABLE "data_leave" ALTER COLUMN "detail_leave" DROP NOT NULL,
ALTER COLUMN "Status" DROP NOT NULL,
ALTER COLUMN "quantity_day" DROP NOT NULL,
ALTER COLUMN "quantity_hours" DROP NOT NULL;
