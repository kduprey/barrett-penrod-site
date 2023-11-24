-- CreateTable
CREATE TABLE "app_keys" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "keys" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "app_keys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "app_keys_name_key" ON "app_keys"("name");

-- CreateIndex
CREATE INDEX "app_keys_name_idx" ON "app_keys"("name");
