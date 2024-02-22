const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const User = require("./models/User.js")
app.use(bodyParser.json());

app.use(cors());
// app.js

const sequelize = require('./db/db.js');




// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API Node.js !');
});

app.get('/api/user/:id', async (req, res) => {
  const id = req.params.id
  const username = await User.findByPk(id)
  console.log(username)
 
  res.status(200).json(username);
});

app.post('/api/user/create', async (req, res) => {
  try {
    const name = req.body.name
    const newUser = await User.create({ name: name });
    console.log('Nouvel utilisateur créé:', newUser.toJSON());
    res.status(200).json(newUser);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
    throw error;
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
