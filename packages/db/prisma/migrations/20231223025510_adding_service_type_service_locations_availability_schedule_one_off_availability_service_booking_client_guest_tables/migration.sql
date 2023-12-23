-- CreateEnum
CREATE TYPE "LOCATION_TYPE" AS ENUM ('ZOOM', 'PHYSICAL');

-- CreateEnum
CREATE TYPE "BOOKING_STATUS" AS ENUM ('cancelled', 'pending', 'accepted', 'rejected', 'awaiting_host');

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "productId" TEXT NOT NULL,
    "duration" INTEGER NOT NULL DEFAULT 60,
    "bufferTimeBefore" INTEGER NOT NULL DEFAULT 0,
    "bufferTimeAfter" INTEGER NOT NULL DEFAULT 0,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "availabilityScheduleId" INTEGER NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_locations" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "location" TEXT,
    "type" "LOCATION_TYPE" NOT NULL,

    CONSTRAINT "service_locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "availability_schedules" (
    "id" SERIAL NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "availability_schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "one_off_availabilities" (
    "id" SERIAL NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "availabilityScheduleId" INTEGER,

    CONSTRAINT "one_off_availabilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceBooking" (
    "id" SERIAL NOT NULL,
    "serviceTypeId" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER NOT NULL,
    "status" "BOOKING_STATUS" NOT NULL DEFAULT 'pending',
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "payment" TEXT NOT NULL,
    "rescheduled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceBooking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "activeMember" BOOLEAN NOT NULL DEFAULT true,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "sessionsRemaining" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "notes" TEXT,
    "pronouns" TEXT,
    "stripeCustomerId" TEXT,
    "authId" TEXT,
    "serviceLocationsId" INTEGER,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guests" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "serviceBookingId" INTEGER NOT NULL,

    CONSTRAINT "guests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "services_name_key" ON "services"("name");

-- CreateIndex
CREATE INDEX "one_off_availabilities_availabilityScheduleId_idx" ON "one_off_availabilities"("availabilityScheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceBooking_payment_key" ON "ServiceBooking"("payment");

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clients_name_key" ON "clients"("name");

-- CreateIndex
CREATE UNIQUE INDEX "clients_stripeCustomerId_key" ON "clients"("stripeCustomerId");

-- CreateIndex
CREATE UNIQUE INDEX "clients_authId_key" ON "clients"("authId");

-- CreateIndex
CREATE INDEX "clients_email_idx" ON "clients"("email");

-- CreateIndex
CREATE INDEX "clients_name_idx" ON "clients"("name");

-- CreateIndex
CREATE INDEX "clients_authId_idx" ON "clients"("authId");

-- CreateIndex
CREATE INDEX "clients_stripeCustomerId_idx" ON "clients"("stripeCustomerId");

-- CreateIndex
CREATE INDEX "clients_activeMember_idx" ON "clients"("activeMember");

-- CreateIndex
CREATE INDEX "guests_email_idx" ON "guests"("email");

-- CreateIndex
CREATE INDEX "guests_name_idx" ON "guests"("name");

-- CreateIndex
CREATE INDEX "guests_phone_idx" ON "guests"("phone");

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_availabilityScheduleId_fkey" FOREIGN KEY ("availabilityScheduleId") REFERENCES "availability_schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_locations" ADD CONSTRAINT "service_locations_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "one_off_availabilities" ADD CONSTRAINT "one_off_availabilities_availabilityScheduleId_fkey" FOREIGN KEY ("availabilityScheduleId") REFERENCES "availability_schedules"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceBooking" ADD CONSTRAINT "ServiceBooking_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceBooking" ADD CONSTRAINT "ServiceBooking_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_serviceLocationsId_fkey" FOREIGN KEY ("serviceLocationsId") REFERENCES "service_locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guests" ADD CONSTRAINT "guests_serviceBookingId_fkey" FOREIGN KEY ("serviceBookingId") REFERENCES "ServiceBooking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
