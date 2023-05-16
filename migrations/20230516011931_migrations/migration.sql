/*
  Warnings:

  - The primary key for the `_Education_photo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `_Education_photo` table. All the data in the column will be lost.
  - The primary key for the `_Portfolio_technology` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `_Portfolio_technology` table. All the data in the column will be lost.
  - The primary key for the `_Post_tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `_Post_tags` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `_Education_photo` DROP PRIMARY KEY,
    DROP COLUMN `id`;

-- AlterTable
ALTER TABLE `_Portfolio_technology` DROP PRIMARY KEY,
    DROP COLUMN `id`;

-- AlterTable
ALTER TABLE `_Post_tags` DROP PRIMARY KEY,
    DROP COLUMN `id`;
