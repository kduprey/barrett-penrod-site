-- CreateEnum
CREATE TYPE "CALENDLY_location" AS ENUM ('zoom', 'physical');

-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('active', 'canceled');

-- CreateEnum
CREATE TYPE "CALENDLY_CANCELER_TYPE" AS ENUM ('invitee', 'host');

-- CreateEnum
CREATE TYPE "WEBHOOKTRIGGEREVENTS" AS ENUM ('BOOKING_CREATED', 'BOOKING_PAID', 'BOOKING_REscheduleD', 'BOOKING_REQUESTED', 'BOOKING_CANCELLED', 'BOOKING_REJECTED', 'FORM_SUBMITTED', 'MEETING_ENDED', 'RECORDING_READY');

-- CreateTable
CREATE TABLE "contact_submissions" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qr_scans" (
    "id" TEXT NOT NULL,
    "flyerSize" INTEGER NOT NULL,
    "campaign" INTEGER NOT NULL,
    "designId" INTEGER NOT NULL,
    "location" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "qr_scans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendly_event_updates" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cancel_url" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "name" TEXT NOT NULL,
    "new_invitee" TEXT,
    "reschedule_url" TEXT NOT NULL,
    "rescheduled" BOOLEAN NOT NULL,
    "status" "STATUS" NOT NULL,
    "timezone" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "client_id" INTEGER,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "scheduled_event_id" INTEGER,
    "cancellation_id" INTEGER,

    CONSTRAINT "calendly_event_updates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendly_event_scheduled_event" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event_type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "uri" TEXT NOT NULL,
    "status" "STATUS" NOT NULL,
    "location_id" INTEGER NOT NULL,

    CONSTRAINT "calendly_event_scheduled_event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendly_event_scheduled_event_location" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "join_url" TEXT NOT NULL,
    "status" TEXT,
    "type" "CALENDLY_location" NOT NULL,
    "location" TEXT,

    CONSTRAINT "calendly_event_scheduled_event_location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendly_event_cancellation" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "canceled_by" TEXT NOT NULL,
    "canceler_type" "CALENDLY_CANCELER_TYPE" NOT NULL,
    "reason" TEXT,

    CONSTRAINT "calendly_event_cancellation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendly_event_questions_and_answers" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "answer" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "calendly_event_id" INTEGER NOT NULL,

    CONSTRAINT "calendly_event_questions_and_answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active_member" BOOLEAN NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "first_session" TIMESTAMP(3),
    "last_session" TIMESTAMP(3),
    "next_session" TIMESTAMP(3),
    "sessions_remaining" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "notes" TEXT,
    "preferred_session_type" TEXT,
    "pronouns" TEXT,
    "refunded_volume" INTEGER NOT NULL DEFAULT 0,
    "total_sessions" INTEGER NOT NULL DEFAULT 0,
    "total_spend" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "stripe_customer_id" TEXT,
    "auth_id" TEXT,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "auth_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "padding" INTEGER NOT NULL DEFAULT 0,
    "is_hidden" BOOLEAN NOT NULL DEFAULT false,
    "capacity" INTEGER NOT NULL,
    "created_by_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "booking" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "is_in_person" BOOLEAN NOT NULL DEFAULT false,
    "address_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedule" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "event_type_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "timezone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "availability" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "event_typeId" INTEGER NOT NULL,
    "days_of_week" INTEGER[],
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "schedule_id" INTEGER,

    CONSTRAINT "availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "webhooks" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "event_typeId" INTEGER NOT NULL,
    "subscriber_url" TEXT NOT NULL,
    "secret" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "eventTriggers" "WEBHOOKTRIGGEREVENTS"[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "webhooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_event_typeTolocation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "contact_submissions_email_key" ON "contact_submissions"("email");

-- CreateIndex
CREATE UNIQUE INDEX "calendly_event_updates_uri_key" ON "calendly_event_updates"("uri");

-- CreateIndex
CREATE UNIQUE INDEX "calendly_event_updates_client_id_key" ON "calendly_event_updates"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "calendly_event_updates_scheduled_event_id_key" ON "calendly_event_updates"("scheduled_event_id");

-- CreateIndex
CREATE UNIQUE INDEX "calendly_event_updates_cancellation_id_key" ON "calendly_event_updates"("cancellation_id");

-- CreateIndex
CREATE UNIQUE INDEX "calendly_event_scheduled_event_uri_key" ON "calendly_event_scheduled_event"("uri");

-- CreateIndex
CREATE UNIQUE INDEX "calendly_event_scheduled_event_location_id_key" ON "calendly_event_scheduled_event"("location_id");

-- CreateIndex
CREATE UNIQUE INDEX "calendly_event_questions_and_answers_calendly_event_id_key" ON "calendly_event_questions_and_answers"("calendly_event_id");

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clients_name_key" ON "clients"("name");

-- CreateIndex
CREATE UNIQUE INDEX "clients_stripe_customer_id_key" ON "clients"("stripe_customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "clients_auth_id_key" ON "clients"("auth_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_id_key" ON "user"("auth_id");

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_event_typeTolocation_AB_unique" ON "_event_typeTolocation"("A", "B");

-- CreateIndex
CREATE INDEX "_event_typeTolocation_B_index" ON "_event_typeTolocation"("B");

-- AddForeignKey
ALTER TABLE "calendly_event_updates" ADD CONSTRAINT "calendly_event_updates_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendly_event_updates" ADD CONSTRAINT "calendly_event_updates_scheduled_event_id_fkey" FOREIGN KEY ("scheduled_event_id") REFERENCES "calendly_event_scheduled_event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendly_event_updates" ADD CONSTRAINT "calendly_event_updates_cancellation_id_fkey" FOREIGN KEY ("cancellation_id") REFERENCES "calendly_event_cancellation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendly_event_scheduled_event" ADD CONSTRAINT "calendly_event_scheduled_event_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "calendly_event_scheduled_event_location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendly_event_questions_and_answers" ADD CONSTRAINT "calendly_event_questions_and_answers_calendly_event_id_fkey" FOREIGN KEY ("calendly_event_id") REFERENCES "calendly_event_scheduled_event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_event_type_id_fkey" FOREIGN KEY ("event_type_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "availability" ADD CONSTRAINT "availability_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "availability" ADD CONSTRAINT "availability_event_typeId_fkey" FOREIGN KEY ("event_typeId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "availability" ADD CONSTRAINT "availability_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "schedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "webhooks" ADD CONSTRAINT "webhooks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "webhooks" ADD CONSTRAINT "webhooks_event_typeId_fkey" FOREIGN KEY ("event_typeId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_event_typeTolocation" ADD CONSTRAINT "_event_typeTolocation_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_event_typeTolocation" ADD CONSTRAINT "_event_typeTolocation_B_fkey" FOREIGN KEY ("B") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
