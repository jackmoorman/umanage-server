/*
  Warnings:

  - Added the required column `answer_one` to the `Security` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answer_three` to the `Security` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answer_two` to the `Security` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question_one` to the `Security` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question_three` to the `Security` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question_two` to the `Security` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Security" ADD COLUMN     "answer_one" TEXT NOT NULL,
ADD COLUMN     "answer_three" TEXT NOT NULL,
ADD COLUMN     "answer_two" TEXT NOT NULL,
ADD COLUMN     "question_one" TEXT NOT NULL,
ADD COLUMN     "question_three" TEXT NOT NULL,
ADD COLUMN     "question_two" TEXT NOT NULL;
