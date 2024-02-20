/*
  Warnings:

  - You are about to drop the `ServiceBooking` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ServiceBooking" DROP CONSTRAINT "ServiceBooking_clientId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceBooking" DROP CONSTRAINT "ServiceBooking_serviceTypeId_fkey";

-- DropForeignKey
ALTER TABLE "guests" DROP CONSTRAINT "guests_serviceBookingId_fkey";

-- DropTable
DROP TABLE "ServiceBooking";

-- CreateTable
CREATE TABLE "service_bookings" (
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

    CONSTRAINT "service_bookings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "service_bookings_payment_key" ON "service_bookings"("payment");

-- CreateIndex
CREATE INDEX "service_bookings_serviceTypeId_idx" ON "service_bookings"("serviceTypeId");

-- CreateIndex
CREATE INDEX "service_bookings_clientId_idx" ON "service_bookings"("clientId");

-- AddForeignKey
ALTER TABLE "service_bookings" ADD CONSTRAINT "service_bookings_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_bookings" ADD CONSTRAINT "service_bookings_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guests" ADD CONSTRAINT "guests_serviceBookingId_fkey" FOREIGN KEY ("serviceBookingId") REFERENCES "service_bookings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
