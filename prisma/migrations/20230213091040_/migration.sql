-- AlterTable
ALTER TABLE "salary" ADD COLUMN     "create_by" UUID,
ADD COLUMN     "create_date" TIMESTAMP(3),
ADD COLUMN     "update_by" UUID,
ADD COLUMN     "update_date" TIMESTAMP(3);
