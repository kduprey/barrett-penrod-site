/*
  Warnings:

  - You are about to drop the column `calendly_webhook_payload_resource_questions_and_answers_id` on the `CalendlyWebhookPayload` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[calendlyWebhookPayloadId]` on the table `CalendlyWebhookPayloadResourceQuestionsAndAnswers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `calendlyWebhookPayloadId` to the `CalendlyWebhookPayloadResourceQuestionsAndAnswers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CalendlyWebhookPayload" DROP CONSTRAINT "CalendlyWebhookPayload_calendly_webhook_payload_resource_q_fkey";

-- DropIndex
DROP INDEX "CalendlyWebhookPayload_calendly_webhook_payload_resource_qu_key";

-- AlterTable
ALTER TABLE "CalendlyWebhookPayload" DROP COLUMN "calendly_webhook_payload_resource_questions_and_answers_id";

-- AlterTable
ALTER TABLE "CalendlyWebhookPayloadResourceQuestionsAndAnswers" ADD COLUMN     "calendlyWebhookPayloadId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CalendlyWebhookPayloadResourceQuestionsAndAnswers_calendlyW_key" ON "CalendlyWebhookPayloadResourceQuestionsAndAnswers"("calendlyWebhookPayloadId");

-- AddForeignKey
ALTER TABLE "CalendlyWebhookPayloadResourceQuestionsAndAnswers" ADD CONSTRAINT "CalendlyWebhookPayloadResourceQuestionsAndAnswers_calendly_fkey" FOREIGN KEY ("calendlyWebhookPayloadId") REFERENCES "CalendlyWebhookPayload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
