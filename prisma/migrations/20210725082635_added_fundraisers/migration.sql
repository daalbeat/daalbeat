-- CreateTable
CREATE TABLE "fundraisers" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "goalAmount" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverPhoto" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shortLink" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "uuid" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "fundraisers.slug_unique" ON "fundraisers"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "fundraisers.uuid_unique" ON "fundraisers"("uuid");

-- AddForeignKey
ALTER TABLE "fundraisers" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
