/*
  Warnings:

  - You are about to drop the column `serviceId` on the `service_locations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "service_locations" DROP CONSTRAINT "service_locations_serviceId_fkey";

-- AlterTable
ALTER TABLE "service_locations" DROP COLUMN "serviceId",
ADD COLUMN     "serviceTypeId" INTEGER;

-- AddForeignKey
ALTER TABLE "service_locations" ADD CONSTRAINT "service_locations_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "services"("id") ON DELETE SET NULL ON UPDATE CASCADE;
