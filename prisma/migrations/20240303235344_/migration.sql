/*
  Warnings:

  - You are about to drop the `Artists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Artists`;

-- CreateTable
CREATE TABLE `artists` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `spotify_id` VARCHAR(255) NOT NULL,
    `youtube_id` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
