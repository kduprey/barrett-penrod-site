/*
  Warnings:

  - You are about to drop the column `dayOfWeek` on the `availability_schedules` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "availability_schedules" DROP COLUMN "dayOfWeek",
ADD COLUMN     "daysOfWeek" TEXT[] DEFAULT ARRAY['1', '2', '3', '4', '5']::TEXT[];
