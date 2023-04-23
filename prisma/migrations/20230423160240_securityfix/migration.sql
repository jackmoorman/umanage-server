/*
  Warnings:

  - You are about to drop the column `security_id` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_security_id_fkey";

-- DropIndex
DROP INDEX "User_security_id_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "security_id";

-- AddForeignKey
ALTER TABLE "Security" ADD CONSTRAINT "Security_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
