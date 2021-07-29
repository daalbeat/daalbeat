-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "stripeCustomerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "billingStreet" TEXT NOT NULL,
    "billingCity" TEXT NOT NULL,
    "billingPostalCode" TEXT NOT NULL,
    "billingState" TEXT NOT NULL,
    "billingCountry" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers.stripeCustomerId_unique" ON "customers"("stripeCustomerId");
