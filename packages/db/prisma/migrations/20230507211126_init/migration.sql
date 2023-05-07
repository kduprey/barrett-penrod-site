-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QrCodeLog" (
    "id" TEXT NOT NULL,
    "flyerSize" INTEGER NOT NULL,
    "campaign" INTEGER NOT NULL,
    "designId" INTEGER NOT NULL,
    "location" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QrCodeLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalendlyWebhookPayload" (
    "id" SERIAL NOT NULL,
    "cancel_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "name" TEXT NOT NULL,
    "new_invitee" TEXT,
    "reschedule_url" TEXT NOT NULL,
    "rescheduled" BOOLEAN NOT NULL,
    "routing_form_submission" TEXT,
    "status" TEXT NOT NULL,
    "text_reminder_number" TEXT,
    "timezone" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "client_id" INTEGER,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CalendlyWebhookPayload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "activeMember" BOOLEAN NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "dateJoined" TIMESTAMP(3) NOT NULL DEFAULT '2001-01-01 00:00:00 -05:00',
    "firstLesson" TIMESTAMP(3),
    "lastLesson" TIMESTAMP(3),
    "nextLesson" TIMESTAMP(3),
    "lessonsRemaining" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "notes" TEXT,
    "preferredLessonFormat" TEXT,
    "pronouns" TEXT,
    "refundedVolume" INTEGER NOT NULL DEFAULT 0,
    "totalLessons" INTEGER NOT NULL DEFAULT 0,
    "totalSpend" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "stripe_customer_id" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalendlyWebhookPayloadResourceCancellation" (
    "id" SERIAL NOT NULL,
    "canceled_by" TEXT NOT NULL,
    "canceler_type" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "payload_id" INTEGER NOT NULL,

    CONSTRAINT "CalendlyWebhookPayloadResourceCancellation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalendlyWebhookPayloadResourceQuestionsAndAnswers" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "payload_id" INTEGER NOT NULL,

    CONSTRAINT "CalendlyWebhookPayloadResourceQuestionsAndAnswers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reconfirmation" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "confirmed_at" TIMESTAMP(3) NOT NULL,
    "payload_id" INTEGER NOT NULL,

    CONSTRAINT "Reconfirmation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "external_id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "terms" TEXT NOT NULL,
    "successful" BOOLEAN NOT NULL,
    "payload_id" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoShow" (
    "id" SERIAL NOT NULL,
    "uri" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "payload_id" INTEGER NOT NULL,

    CONSTRAINT "NoShow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalendlyWebhookPayloadResourceTracking" (
    "id" SERIAL NOT NULL,
    "salesforce_uuid" TEXT,
    "utm_campaign" TEXT,
    "utm_content" TEXT,
    "utm_medium" TEXT,
    "utm_source" TEXT,
    "utm_term" TEXT,
    "payload_id" INTEGER NOT NULL,

    CONSTRAINT "CalendlyWebhookPayloadResourceTracking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CalendlyWebhookPayload_uri_key" ON "CalendlyWebhookPayload"("uri");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Client_stripe_customer_id_key" ON "Client"("stripe_customer_id");

-- AddForeignKey
ALTER TABLE "CalendlyWebhookPayload" ADD CONSTRAINT "CalendlyWebhookPayload_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendlyWebhookPayloadResourceCancellation" ADD CONSTRAINT "CalendlyWebhookPayloadResourceCancellation_payload_id_fkey" FOREIGN KEY ("payload_id") REFERENCES "CalendlyWebhookPayload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendlyWebhookPayloadResourceQuestionsAndAnswers" ADD CONSTRAINT "CalendlyWebhookPayloadResourceQuestionsAndAnswers_payload__fkey" FOREIGN KEY ("payload_id") REFERENCES "CalendlyWebhookPayload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reconfirmation" ADD CONSTRAINT "Reconfirmation_payload_id_fkey" FOREIGN KEY ("payload_id") REFERENCES "CalendlyWebhookPayload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_payload_id_fkey" FOREIGN KEY ("payload_id") REFERENCES "CalendlyWebhookPayload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NoShow" ADD CONSTRAINT "NoShow_payload_id_fkey" FOREIGN KEY ("payload_id") REFERENCES "CalendlyWebhookPayload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendlyWebhookPayloadResourceTracking" ADD CONSTRAINT "CalendlyWebhookPayloadResourceTracking_payload_id_fkey" FOREIGN KEY ("payload_id") REFERENCES "CalendlyWebhookPayload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
