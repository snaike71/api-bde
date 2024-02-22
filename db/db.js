const Sequelize = require('sequelize');
require('dotenv').config()


const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

// Remplacer par vos paramètres de connexion
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql', 
    port: DB_PORT,
});


// Test de la connexion
sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données établie avec succès.'))
    .catch(err => console.error('Impossible de se connecter à la base de données:', err));

module.exports = sequelize;