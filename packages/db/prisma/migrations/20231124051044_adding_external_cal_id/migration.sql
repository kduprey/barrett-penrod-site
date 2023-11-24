/*
  Warnings:

  - A unique constraint covering the columns `[externalCalId]` on the table `connected_calendars` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `externalCalId` to the `connected_calendars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "connected_calendars" ADD COLUMN     "externalCalId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "connected_calendars_externalCalId_key" ON "connected_calendars"("externalCalId");
