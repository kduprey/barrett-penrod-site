-- AlterTable
CREATE SEQUENCE connected_calendars_id_seq;
ALTER TABLE "connected_calendars" ALTER COLUMN "id" SET DEFAULT nextval('connected_calendars_id_seq');
ALTER SEQUENCE connected_calendars_id_seq OWNED BY "connected_calendars"."id";
