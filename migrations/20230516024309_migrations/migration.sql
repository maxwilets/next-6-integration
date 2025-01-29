-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT '',
    `email` VARCHAR(191) NOT NULL DEFAULT '',
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resume` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL DEFAULT '',
    `company` VARCHAR(191) NOT NULL DEFAULT '',
    `date` VARCHAR(191) NOT NULL DEFAULT '',
    `startYear` INTEGER NULL,
    `endYear` INTEGER NULL,
    `role1` VARCHAR(191) NOT NULL DEFAULT '',
    `role2` VARCHAR(191) NOT NULL DEFAULT '',
    `role3` VARCHAR(191) NOT NULL DEFAULT '',
    `role4` VARCHAR(191) NOT NULL DEFAULT '',
    `role5` VARCHAR(191) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `id` VARCHAR(191) NOT NULL,
    `skillName` VARCHAR(191) NOT NULL DEFAULT '',
    `level` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coursework` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT '',
    `course` VARCHAR(191) NOT NULL DEFAULT '',
    `description` VARCHAR(191) NOT NULL DEFAULT '',
    `author` VARCHAR(191) NOT NULL DEFAULT '',
    `link` VARCHAR(191) NOT NULL DEFAULT '',
    `photo` VARCHAR(191) NULL,

    UNIQUE INDEX `Coursework_photo_key`(`photo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Education` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT '',
    `title` VARCHAR(191) NOT NULL DEFAULT '',
    `location` VARCHAR(191) NOT NULL DEFAULT '',
    `time` VARCHAR(191) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Portfolio` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL DEFAULT '',
    `p1` VARCHAR(500) NOT NULL DEFAULT '',
    `p2` VARCHAR(500) NOT NULL DEFAULT '',
    `p3` VARCHAR(500) NOT NULL DEFAULT '',
    `repo` VARCHAR(191) NOT NULL DEFAULT '',
    `liveSite` VARCHAR(191) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Technology` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT '',
    `typeLink` VARCHAR(191) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Photo` (
    `id` VARCHAR(191) NOT NULL,
    `image` JSON NULL,
    `altText` VARCHAR(191) NOT NULL DEFAULT '',
    `portfolioPhoto` VARCHAR(191) NULL,

    UNIQUE INDEX `Photo_portfolioPhoto_key`(`portfolioPhoto`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL DEFAULT '',
    `summary` VARCHAR(500) NOT NULL DEFAULT '',
    `slug` VARCHAR(191) NOT NULL DEFAULT '',
    `date` VARCHAR(191) NOT NULL DEFAULT '',
    `content` JSON NOT NULL,
    `author` VARCHAR(191) NULL,

    INDEX `Post_slug_idx`(`slug`),
    INDEX `Post_author_idx`(`author`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_Education_photo` (
    `id` VARCHAR(191) NOT NULL,
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `_Education_photo_AB_unique`(`A`, `B`),
    INDEX `_Education_photo_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_Portfolio_technology` (
    `id` VARCHAR(191) NOT NULL,
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `_Portfolio_technology_AB_unique`(`A`, `B`),
    INDEX `_Portfolio_technology_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_Post_tags` (
    `id` VARCHAR(191) NOT NULL,
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `_Post_tags_AB_unique`(`A`, `B`),
    INDEX `_Post_tags_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Coursework` ADD CONSTRAINT `Coursework_photo_fkey` FOREIGN KEY (`photo`) REFERENCES `Photo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_portfolioPhoto_fkey` FOREIGN KEY (`portfolioPhoto`) REFERENCES `Portfolio`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_author_fkey` FOREIGN KEY (`author`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Education_photo` ADD CONSTRAINT `_Education_photo_A_fkey` FOREIGN KEY (`A`) REFERENCES `Education`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Education_photo` ADD CONSTRAINT `_Education_photo_B_fkey` FOREIGN KEY (`B`) REFERENCES `Photo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Portfolio_technology` ADD CONSTRAINT `_Portfolio_technology_A_fkey` FOREIGN KEY (`A`) REFERENCES `Portfolio`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Portfolio_technology` ADD CONSTRAINT `_Portfolio_technology_B_fkey` FOREIGN KEY (`B`) REFERENCES `Technology`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Post_tags` ADD CONSTRAINT `_Post_tags_A_fkey` FOREIGN KEY (`A`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Post_tags` ADD CONSTRAINT `_Post_tags_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
