/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `availability_schedules` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `availability_schedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "availability_schedules" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "availability_schedules_name_key" ON "availability_schedules"("name");

-- CreateIndex
CREATE INDEX "availability_schedules_name_idx" ON "availability_schedules"("name");
