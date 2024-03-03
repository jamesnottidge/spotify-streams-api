/*
  Warnings:

  - Added the required column `name` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `youtubeId` to the `Artist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Artist` ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `youtubeId` VARCHAR(255) NOT NULL;
