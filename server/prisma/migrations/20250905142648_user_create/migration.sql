-- CreateTable
CREATE TABLE "public"."esmUsers" (
    "id" TEXT NOT NULL,
    "userId" VARCHAR(50) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "esmUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "esmUsers_userId_key" ON "public"."esmUsers"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "esmUsers_email_key" ON "public"."esmUsers"("email");
