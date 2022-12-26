/*
  Warnings:

  - You are about to drop the column `phone` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `prefix` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `address_2` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "phone",
ADD COLUMN     "address_2" VARCHAR(255) NOT NULL,
ADD COLUMN     "company_registration_id" TEXT,
ADD COLUMN     "company_type" TEXT,
ADD COLUMN     "company_vat_id" TEXT,
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
ADD COLUMN     "tel" VARCHAR(255);

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "firstname",
DROP COLUMN "lastname",
DROP COLUMN "prefix",
ADD COLUMN     "age" TEXT,
ADD COLUMN     "citizen_address" TEXT,
ADD COLUMN     "citizen_addressnumber" TEXT,
ADD COLUMN     "citizen_country" TEXT,
ADD COLUMN     "citizen_district" TEXT,
ADD COLUMN     "citizen_id" TEXT,
ADD COLUMN     "citizen_province" TEXT,
ADD COLUMN     "citizen_state" TEXT,
ADD COLUMN     "citizen_tel" TEXT,
ADD COLUMN     "citizen_zipcode" TEXT,
ADD COLUMN     "contract_address" TEXT,
ADD COLUMN     "contract_addressnumber" TEXT,
ADD COLUMN     "contract_companyemail" TEXT,
ADD COLUMN     "contract_country" TEXT,
ADD COLUMN     "contract_district" TEXT,
ADD COLUMN     "contract_email" TEXT,
ADD COLUMN     "contract_province" TEXT,
ADD COLUMN     "contract_sameCitizen" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "contract_state" TEXT,
ADD COLUMN     "contract_zipcode" TEXT,
ADD COLUMN     "firstname_en" VARCHAR(255),
ADD COLUMN     "firstname_th" VARCHAR(255),
ADD COLUMN     "lastname_en" VARCHAR(255),
ADD COLUMN     "lastname_th" VARCHAR(255),
ADD COLUMN     "prefix_en" TEXT,
ADD COLUMN     "prefix_th" TEXT,
ADD COLUMN     "relationship" TEXT,
ADD COLUMN     "shirt_size" TEXT,
ADD COLUMN     "social_facebook" TEXT,
ADD COLUMN     "social_id" TEXT,
ADD COLUMN     "social_likedin" TEXT,
ADD COLUMN     "social_line" TEXT,
ADD COLUMN     "social_telegram" TEXT,
ADD COLUMN     "staff_status" TEXT;
