-- CreateIndex
CREATE INDEX "connected_calendars_isDestinationCalendar_idx" ON "connected_calendars"("isDestinationCalendar");

-- CreateIndex
CREATE INDEX "connected_calendars_externalCalId_idx" ON "connected_calendars"("externalCalId");
