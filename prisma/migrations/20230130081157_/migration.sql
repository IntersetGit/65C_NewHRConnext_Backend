-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "blood_type" TEXT,
ADD COLUMN     "employee_status" TEXT,
ADD COLUMN     "nickname" VARCHAR(255);

-- AddForeignKey
ALTER TABLE "Position_user" ADD CONSTRAINT "Position_user_leader_fkey" FOREIGN KEY ("leader") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
