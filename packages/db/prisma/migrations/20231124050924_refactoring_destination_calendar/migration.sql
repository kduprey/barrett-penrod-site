/*
  Warnings:

  - You are about to drop the `destination_calendars` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "destination_calendars" DROP CONSTRAINT "destination_calendars_connectedCalendarId_fkey";

-- AlterTable
ALTER TABLE "connected_calendars" ADD COLUMN     "isDestinationCalendar" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "destination_calendars";
