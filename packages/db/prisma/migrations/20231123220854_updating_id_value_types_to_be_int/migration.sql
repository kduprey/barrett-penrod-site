/*
  Warnings:

  - The primary key for the `connected_calendars` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `destination_calendars` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `destination_calendars` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `id` on the `connected_calendars` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `connectedCalendarId` on the `destination_calendars` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "destination_calendars" DROP CONSTRAINT "destination_calendars_connectedCalendarId_fkey";

-- AlterTable
ALTER TABLE "connected_calendars" DROP CONSTRAINT "connected_calendars_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "connected_calendars_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "destination_calendars" DROP CONSTRAINT "destination_calendars_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "connectedCalendarId",
ADD COLUMN     "connectedCalendarId" INTEGER NOT NULL,
ADD CONSTRAINT "destination_calendars_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "destination_calendars_connectedCalendarId_key" ON "destination_calendars"("connectedCalendarId");

-- CreateIndex
CREATE INDEX "destination_calendars_connectedCalendarId_idx" ON "destination_calendars"("connectedCalendarId");

-- AddForeignKey
ALTER TABLE "destination_calendars" ADD CONSTRAINT "destination_calendars_connectedCalendarId_fkey" FOREIGN KEY ("connectedCalendarId") REFERENCES "connected_calendars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
