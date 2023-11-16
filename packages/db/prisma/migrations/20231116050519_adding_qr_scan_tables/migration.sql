/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_event_typeTolocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `availability` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `booking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `calendly_event_cancellation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `calendly_event_questions_and_answers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `calendly_event_scheduled_event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `calendly_event_scheduled_event_location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `calendly_event_updates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `schedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `webhooks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "_event_typeTolocation" DROP CONSTRAINT "_event_typeTolocation_A_fkey";

-- DropForeignKey
ALTER TABLE "_event_typeTolocation" DROP CONSTRAINT "_event_typeTolocation_B_fkey";

-- DropForeignKey
ALTER TABLE "availability" DROP CONSTRAINT "availability_event_typeId_fkey";

-- DropForeignKey
ALTER TABLE "availability" DROP CONSTRAINT "availability_schedule_id_fkey";

-- DropForeignKey
ALTER TABLE "availability" DROP CONSTRAINT "availability_user_id_fkey";

-- DropForeignKey
ALTER TABLE "booking" DROP CONSTRAINT "booking_event_id_fkey";

-- DropForeignKey
ALTER TABLE "booking" DROP CONSTRAINT "booking_user_id_fkey";

-- DropForeignKey
ALTER TABLE "calendly_event_questions_and_answers" DROP CONSTRAINT "calendly_event_questions_and_answers_calendly_event_id_fkey";

-- DropForeignKey
ALTER TABLE "calendly_event_scheduled_event" DROP CONSTRAINT "calendly_event_scheduled_event_location_id_fkey";

-- DropForeignKey
ALTER TABLE "calendly_event_updates" DROP CONSTRAINT "calendly_event_updates_cancellation_id_fkey";

-- DropForeignKey
ALTER TABLE "calendly_event_updates" DROP CONSTRAINT "calendly_event_updates_client_id_fkey";

-- DropForeignKey
ALTER TABLE "calendly_event_updates" DROP CONSTRAINT "calendly_event_updates_scheduled_event_id_fkey";

-- DropForeignKey
ALTER TABLE "location" DROP CONSTRAINT "location_address_id_fkey";

-- DropForeignKey
ALTER TABLE "schedule" DROP CONSTRAINT "schedule_event_type_id_fkey";

-- DropForeignKey
ALTER TABLE "schedule" DROP CONSTRAINT "schedule_user_id_fkey";

-- DropForeignKey
ALTER TABLE "webhooks" DROP CONSTRAINT "webhooks_event_typeId_fkey";

-- DropForeignKey
ALTER TABLE "webhooks" DROP CONSTRAINT "webhooks_user_id_fkey";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "_event_typeTolocation";

-- DropTable
DROP TABLE "address";

-- DropTable
DROP TABLE "availability";

-- DropTable
DROP TABLE "booking";

-- DropTable
DROP TABLE "calendly_event_cancellation";

-- DropTable
DROP TABLE "calendly_event_questions_and_answers";

-- DropTable
DROP TABLE "calendly_event_scheduled_event";

-- DropTable
DROP TABLE "calendly_event_scheduled_event_location";

-- DropTable
DROP TABLE "calendly_event_updates";

-- DropTable
DROP TABLE "clients";

-- DropTable
DROP TABLE "location";

-- DropTable
DROP TABLE "schedule";

-- DropTable
DROP TABLE "user";

-- DropTable
DROP TABLE "webhooks";

-- DropEnum
DROP TYPE "CALENDLY_CANCELER_TYPE";

-- DropEnum
DROP TYPE "CALENDLY_location";

-- DropEnum
DROP TYPE "STATUS";

-- DropEnum
DROP TYPE "WEBHOOKTRIGGEREVENTS";

-- CreateTable
CREATE TABLE "qr_scan_locations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "qr_scan_locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qr_scan_designs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "qr_scan_designs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qr_scan_campaigns" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "qr_scan_campaigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qr_scan_flyer_sizes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "qr_scan_flyer_sizes_pkey" PRIMARY KEY ("id")
);
