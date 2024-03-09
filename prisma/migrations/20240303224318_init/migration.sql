/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `spotifyId` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `youtubeId` on the `Artist` table. All the data in the column will be lost.
  - Added the required column `spotify_id` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `youtube_id` to the `Artist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Artist` DROP COLUMN `createdAt`,
    DROP COLUMN `spotifyId`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `youtubeId`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `spotify_id` VARCHAR(255) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `youtube_id` VARCHAR(255) NOT NULL;
