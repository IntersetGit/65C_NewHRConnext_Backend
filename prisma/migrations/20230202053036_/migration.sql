-- AlterTable
ALTER TABLE "bookbank_log" ALTER COLUMN "base_salary" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "expense_company" ALTER COLUMN "vat_per" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "social_security" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "salary" ALTER COLUMN "commission" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "position_income" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "ot" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "bonus" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "special_income" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "other_income" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "travel_income" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "bursary" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "welfare_money" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "vat" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "social_security" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "miss" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "ra" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "late" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "other" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "provident_employee" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "provident_company" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "total_income" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "total_expense" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "net" SET DATA TYPE DOUBLE PRECISION;