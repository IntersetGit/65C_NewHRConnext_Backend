/*
  Warnings:

  - You are about to drop the column `address` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `address_2` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `company_type` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `email_2` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `fax` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `lat` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `lng` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `registeredamount` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `social_facebook` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `social_instragram` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `social_likedin` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `social_line` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `sub_company_type` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `tel` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `zip` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "address",
DROP COLUMN "address_2",
DROP COLUMN "city",
DROP COLUMN "company_type",
DROP COLUMN "country",
DROP COLUMN "email",
DROP COLUMN "email_2",
DROP COLUMN "fax",
DROP COLUMN "lat",
DROP COLUMN "lng",
DROP COLUMN "registeredamount",
DROP COLUMN "social_facebook",
DROP COLUMN "social_instragram",
DROP COLUMN "social_likedin",
DROP COLUMN "social_line",
DROP COLUMN "state",
DROP COLUMN "sub_company_type",
DROP COLUMN "tel",
DROP COLUMN "website",
DROP COLUMN "zip";

-- AlterTable
ALTER TABLE "CompanyBranch" ADD COLUMN     "address_2" VARCHAR(255),
ADD COLUMN     "company_type" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "email_2" TEXT,
ADD COLUMN     "fax" VARCHAR(255),
ADD COLUMN     "lat" TEXT,
ADD COLUMN     "lng" TEXT,
ADD COLUMN     "registeredamount" TEXT,
ADD COLUMN     "social_facebook" TEXT,
ADD COLUMN     "social_instragram" TEXT,
ADD COLUMN     "social_likedin" TEXT,
ADD COLUMN     "social_line" TEXT,
ADD COLUMN     "sub_company_type" TEXT,
ADD COLUMN     "tel" VARCHAR(255),
ADD COLUMN     "website" VARCHAR(255);
