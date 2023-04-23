-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_security_id_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "security_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_security_id_fkey" FOREIGN KEY ("security_id") REFERENCES "Security"("id") ON DELETE SET NULL ON UPDATE CASCADE;
