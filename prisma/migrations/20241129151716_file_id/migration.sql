/*
  Warnings:

  - Added the required column `fileId` to the `DocumentMetadata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DocumentMetadata" ADD COLUMN     "fileId" TEXT NOT NULL;
