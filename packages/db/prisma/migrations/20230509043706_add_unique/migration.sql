/*
  Warnings:

  - A unique constraint covering the columns `[client_id]` on the table `CalendlyWebhookPayload` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[payload_id]` on the table `CalendlyWebhookPayloadResourceCancellation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[payload_id]` on the table `CalendlyWebhookPayloadResourceQuestionsAndAnswers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[payload_id]` on the table `CalendlyWebhookPayloadResourceTracking` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[payload_id]` on the table `NoShow` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[payload_id]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[payload_id]` on the table `Reconfirmation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CalendlyWebhookPayload_client_id_key" ON "CalendlyWebhookPayload"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "CalendlyWebhookPayloadResourceCancellation_payload_id_key" ON "CalendlyWebhookPayloadResourceCancellation"("payload_id");

-- CreateIndex
CREATE UNIQUE INDEX "CalendlyWebhookPayloadResourceQuestionsAndAnswers_payload_i_key" ON "CalendlyWebhookPayloadResourceQuestionsAndAnswers"("payload_id");

-- CreateIndex
CREATE UNIQUE INDEX "CalendlyWebhookPayloadResourceTracking_payload_id_key" ON "CalendlyWebhookPayloadResourceTracking"("payload_id");

-- CreateIndex
CREATE UNIQUE INDEX "NoShow_payload_id_key" ON "NoShow"("payload_id");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_payload_id_key" ON "Payment"("payload_id");

-- CreateIndex
CREATE UNIQUE INDEX "Reconfirmation_payload_id_key" ON "Reconfirmation"("payload_id");
