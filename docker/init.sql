-- Créer la base de données whaletracker
CREATE DATABASE IF NOT EXISTS bde_database;

-- Sélectionner la base de données whaletracker
USE bde_database;

-- Création de la table Crypto
CREATE TABLE IF NOT EXISTS bde_Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


