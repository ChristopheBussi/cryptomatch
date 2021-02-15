<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210210101640 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE portfolio (id INT AUTO_INCREMENT NOT NULL, actual_quantity DOUBLE PRECISION NOT NULL, average_price DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE portfolio_crypto (portfolio_id INT NOT NULL, crypto_id INT NOT NULL, INDEX IDX_6EC3C5B0B96B5643 (portfolio_id), INDEX IDX_6EC3C5B0E9571A63 (crypto_id), PRIMARY KEY(portfolio_id, crypto_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE portfolio_crypto ADD CONSTRAINT FK_6EC3C5B0B96B5643 FOREIGN KEY (portfolio_id) REFERENCES portfolio (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE portfolio_crypto ADD CONSTRAINT FK_6EC3C5B0E9571A63 FOREIGN KEY (crypto_id) REFERENCES crypto (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE portfolio_crypto DROP FOREIGN KEY FK_6EC3C5B0B96B5643');
        $this->addSql('DROP TABLE portfolio');
        $this->addSql('DROP TABLE portfolio_crypto');
    }
}
