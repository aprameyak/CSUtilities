-- CreateEnum
CREATE TYPE "AdminRole" AS ENUM ('SUPER_ADMIN', 'CONTENT_ADMIN');

-- CreateEnum
CREATE TYPE "AdminStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "ProblemStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'DRAFT');

-- CreateEnum
CREATE TYPE "UniversityStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'DRAFT');

-- CreateEnum
CREATE TYPE "CompanyStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'DRAFT');

-- CreateEnum
CREATE TYPE "InternshipType" AS ENUM ('SUMMER', 'FALL', 'SPRING', 'YEAR_ROUND', 'CO_OP');

-- CreateEnum
CREATE TYPE "InternshipDifficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "InternshipStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'DRAFT', 'CLOSED');

-- CreateEnum
CREATE TYPE "DataSource" AS ENUM ('GITHUB_VANSH', 'GITHUB_SIMPLIFY', 'INTERN_LIST', 'LINKEDIN', 'GLASSDOOR', 'INDEED', 'HANDLE', 'MANUAL');

-- CreateEnum
CREATE TYPE "SyncStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "admin_users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "AdminRole" NOT NULL DEFAULT 'CONTENT_ADMIN',
    "status" "AdminStatus" NOT NULL DEFAULT 'ACTIVE',
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsa_problems" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "description" TEXT NOT NULL,
    "topics" TEXT[],
    "companyTags" TEXT[],
    "leetcodeUrl" TEXT,
    "status" "ProblemStatus" NOT NULL DEFAULT 'ACTIVE',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT,

    CONSTRAINT "dsa_problems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "universities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rank" INTEGER,
    "country" TEXT NOT NULL,
    "prestigeScore" INTEGER NOT NULL DEFAULT 0,
    "websiteUrl" TEXT,
    "location" TEXT,
    "description" TEXT,
    "logoUrl" TEXT,
    "status" "UniversityStatus" NOT NULL DEFAULT 'ACTIVE',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT,

    CONSTRAINT "universities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "prestigeScore" INTEGER NOT NULL DEFAULT 0,
    "rank" INTEGER,
    "industry" TEXT NOT NULL,
    "location" TEXT,
    "websiteUrl" TEXT,
    "description" TEXT,
    "logoUrl" TEXT,
    "status" "CompanyStatus" NOT NULL DEFAULT 'ACTIVE',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "internships" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "type" "InternshipType" NOT NULL,
    "duration" TEXT,
    "salaryMin" INTEGER,
    "salaryMax" INTEGER,
    "salaryCurrency" TEXT NOT NULL DEFAULT 'USD',
    "requirements" TEXT[],
    "skills" TEXT[],
    "description" TEXT NOT NULL,
    "applicationDeadline" TIMESTAMP(3),
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "remote" BOOLEAN NOT NULL DEFAULT false,
    "dataSource" "DataSource" NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "postedDate" TIMESTAMP(3) NOT NULL,
    "companyLogo" TEXT,
    "difficulty" "InternshipDifficulty" NOT NULL DEFAULT 'MEDIUM',
    "popularity" INTEGER NOT NULL DEFAULT 0,
    "status" "InternshipStatus" NOT NULL DEFAULT 'ACTIVE',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT,

    CONSTRAINT "internships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_source_syncs" (
    "id" TEXT NOT NULL,
    "sourceName" "DataSource" NOT NULL,
    "lastSyncAt" TIMESTAMP(3) NOT NULL,
    "recordsProcessed" INTEGER NOT NULL,
    "recordsAdded" INTEGER NOT NULL,
    "recordsUpdated" INTEGER NOT NULL,
    "recordsFailed" INTEGER NOT NULL,
    "errorMessage" TEXT,
    "status" "SyncStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "data_source_syncs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "actionType" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT,
    "oldValues" JSONB,
    "newValues" JSONB,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_username_key" ON "admin_users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_email_key" ON "admin_users"("email");

-- AddForeignKey
ALTER TABLE "dsa_problems" ADD CONSTRAINT "dsa_problems_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "admin_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsa_problems" ADD CONSTRAINT "dsa_problems_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "admin_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "universities" ADD CONSTRAINT "universities_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "admin_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "universities" ADD CONSTRAINT "universities_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "admin_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "admin_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "admin_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internships" ADD CONSTRAINT "internships_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internships" ADD CONSTRAINT "internships_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "admin_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internships" ADD CONSTRAINT "internships_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "admin_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
