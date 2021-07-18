/*
  Warnings:

  - You are about to drop the `EarlyAccessLeads` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "EarlyAccessLeads";

-- CreateTable
CREATE TABLE "leads" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hospitals" (
    "id" SERIAL NOT NULL,
    "facilityId" TEXT NOT NULL,
    "facilityName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "countyName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "hospitalType" TEXT NOT NULL,
    "hospitalOwnership" TEXT NOT NULL,
    "emergencyServices" TEXT NOT NULL,
    "interoperabilityEHR" TEXT,
    "hospitalOverallRating" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "leads.email_unique" ON "leads"("email");

-- CreateIndex
CREATE UNIQUE INDEX "hospitals.facilityId_unique" ON "hospitals"("facilityId");
