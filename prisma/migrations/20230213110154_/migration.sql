-- AlterTable
ALTER TABLE "mas_all_collect" ALTER COLUMN "income_collect" DROP NOT NULL,
ALTER COLUMN "social_secu_collect" DROP NOT NULL,
ALTER COLUMN "provident_collect_employee" DROP NOT NULL,
ALTER COLUMN "provident_collect_company" DROP NOT NULL,
ALTER COLUMN "date" DROP NOT NULL;
