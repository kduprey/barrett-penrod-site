/*
  Warnings:

  - You are about to drop the column `payload_id` on the `CalendlyWebhookPayloadResourceCancellation` table. All the data in the column will be lost.
  - You are about to drop the column `payload_id` on the `CalendlyWebhookPayloadResourceQuestionsAndAnswers` table. All the data in the column will be lost.
  - You are about to drop the column `payload_id` on the `CalendlyWebhookPayloadResourceTracking` table. All the data in the column will be lost.
  - You are about to drop the column `payload_id` on the `NoShow` table. All the data in the column will be lost.
  - You are about to drop the column `payload_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payload_id` on the `Reconfirmation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[calendly_webhook_payload_resource_tracking_id]` on the table `CalendlyWebhookPayload` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[calendly_webhook_payload_resource_cancellation_id]` on the table `CalendlyWebhookPayload` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[calendly_webhook_payload_resource_questions_and_answers_id]` on the table `CalendlyWebhookPayload` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reconfirmation_id]` on the table `CalendlyWebhookPayload` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[payment_id]` on the table `CalendlyWebhookPayload` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[noShow_id]` on the table `CalendlyWebhookPayload` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `calendly_webhook_payload_resource_cancellation_id` to the `CalendlyWebhookPayload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calendly_webhook_payload_resource_questions_and_answers_id` to the `CalendlyWebhookPayload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calendly_webhook_payload_resource_tracking_id` to the `CalendlyWebhookPayload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `noShow_id` to the `CalendlyWebhookPayload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_id` to the `CalendlyWebhookPayload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reconfirmation_id` to the `CalendlyWebhookPayload` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CalendlyWebhookPayloadResourceCancellation" DROP CONSTRAINT "CalendlyWebhookPayloadResourceCancellation_payload_id_fkey";

-- DropForeignKey
ALTER TABLE "CalendlyWebhookPayloadResourceQuestionsAndAnswers" DROP CONSTRAINT "CalendlyWebhookPayloadResourceQuestionsAndAnswers_payload__fkey";

-- DropForeignKey
ALTER TABLE "CalendlyWebhookPayloadResourceTracking" DROP CONSTRAINT "CalendlyWebhookPayloadResourceTracking_payload_id_fkey";

-- DropForeignKey
ALTER TABLE "NoShow" DROP CONSTRAINT "NoShow_payload_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_payload_id_fkey";

-- DropForeignKey
ALTER TABLE "Reconfirmation" DROP CONSTRAINT "Reconfirmation_payload_id_fkey";

-- DropIndex
DROP INDEX "CalendlyWebhookPayloadResourceCancellation_payload_id_key";

-- DropIndex
DROP INDEX "CalendlyWebhookPayloadResourceQuestionsAndAnswers_payload_i_key";

-- DropIndex
DROP INDEX "CalendlyWebhookPayloadResourceTracking_payload_id_key";

-- DropIndex
DROP INDEX "NoShow_payload_id_key";

-- DropIndex
DROP INDEX "Payment_payload_id_key";

-- DropIndex
DROP INDEX "Reconfirmation_payload_id_key";

-- AlterTable
ALTER TABLE "CalendlyWebhookPayload" ADD COLUMN     "calendly_webhook_payload_resource_cancellation_id" INTEGER NOT NULL,
ADD COLUMN     "calendly_webhook_payload_resource_questions_and_answers_id" INTEGER NOT NULL,
ADD COLUMN     "calendly_webhook_payload_resource_tracking_id" INTEGER NOT NULL,
ADD COLUMN     "noShow_id" INTEGER NOT NULL,
ADD COLUMN     "payment_id" INTEGER NOT NULL,
ADD COLUMN     "reconfirmation_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CalendlyWebhookPayloadResourceCancellation" DROP COLUMN "payload_id";

-- AlterTable
ALTER TABLE "CalendlyWebhookPayloadResourceQuestionsAndAnswers" DROP COLUMN "payload_id";

-- AlterTable
ALTER TABLE "CalendlyWebhookPayloadResourceTracking" DROP COLUMN "payload_id";

-- AlterTable
ALTER TABLE "NoShow" DROP COLUMN "payload_id";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "payload_id";

-- AlterTable
ALTER TABLE "Reconfirmation" DROP COLUMN "payload_id";

-- CreateIndex
CREATE UNIQUE INDEX "CalendlyWebhookPayload_calendly_webhook_payload_resource_tr_key" ON "CalendlyWebhookPayload"("calendly_webhook_payload_resource_tracking_id");

-- CreateIndex
CREATE UNIQUE INDEX "CalendlyWebhookPayload_calendly_webhook_payload_resource_ca_key" ON "CalendlyWebhookPayload"("calendly_webhook_payload_resource_cancellation_id");

-- CreateIndex
CREATE UNIQUE INDEX "CalendlyWebhookPayload_calendly_webhook_payload_resource_qu_key" ON "CalendlyWebhookPayload"("calendly_webhook_payload_resource_questions_and_answers_id");

-- CreateIndex
CREATE UNIQUE INDEX "CalendlyWebhookPayload_reconfirmation_id_key" ON "CalendlyWebhookPayload"("reconfirmation_id");

-- CreateIndex
CREATE UNIQUE INDEX "CalendlyWebhookPayload_payment_id_key" ON "CalendlyWebhookPayload"("payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "CalendlyWebhookPayload_noShow_id_key" ON "CalendlyWebhookPayload"("noShow_id");

-- AddForeignKey
ALTER TABLE "CalendlyWebhookPayload" ADD CONSTRAINT "CalendlyWebhookPayload_calendly_webhook_payload_resource_t_fkey" FOREIGN KEY ("calendly_webhook_payload_resource_tracking_id") REFERENCES "CalendlyWebhookPayloadResourceTracking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendlyWebhookPayload" ADD CONSTRAINT "CalendlyWebhookPayload_calendly_webhook_payload_resource_c_fkey" FOREIGN KEY ("calendly_webhook_payload_resource_cancellation_id") REFERENCES "CalendlyWebhookPayloadResourceCancellation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendlyWebhookPayload" ADD CONSTRAINT "CalendlyWebhookPayload_calendly_webhook_payload_resource_q_fkey" FOREIGN KEY ("calendly_webhook_payload_resource_questions_and_answers_id") REFERENCES "CalendlyWebhookPayloadResourceQuestionsAndAnswers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendlyWebhookPayload" ADD CONSTRAINT "CalendlyWebhookPayload_reconfirmation_id_fkey" FOREIGN KEY ("reconfirmation_id") REFERENCES "Reconfirmation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendlyWebhookPayload" ADD CONSTRAINT "CalendlyWebhookPayload_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendlyWebhookPayload" ADD CONSTRAINT "CalendlyWebhookPayload_noShow_id_fkey" FOREIGN KEY ("noShow_id") REFERENCES "NoShow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
