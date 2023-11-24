-- CreateTable
CREATE TABLE "destination_calendars" (
    "id" TEXT NOT NULL,
    "connectedCalendarId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "destination_calendars_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "destination_calendars_connectedCalendarId_key" ON "destination_calendars"("connectedCalendarId");

-- CreateIndex
CREATE INDEX "destination_calendars_connectedCalendarId_idx" ON "destination_calendars"("connectedCalendarId");

-- AddForeignKey
ALTER TABLE "destination_calendars" ADD CONSTRAINT "destination_calendars_connectedCalendarId_fkey" FOREIGN KEY ("connectedCalendarId") REFERENCES "connected_calendars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
