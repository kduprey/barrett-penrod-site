-- AlterTable
ALTER TABLE "app_keys" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "connected_calendars" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "connected_calendars_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "connected_calendars_isPrimary_idx" ON "connected_calendars"("isPrimary");

-- CreateIndex
CREATE INDEX "connected_calendars_name_idx" ON "connected_calendars"("name");
