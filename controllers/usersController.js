// controllers/walletController.js
const User = require('../models/User');


const userController = {
    // Créer un nouveau wallet
    createUser: async (req, res) => {

        try {
            const name = req.body.name
            const newUser = await User.create({ name: name });
            console.log('Nouvel utilisateur créé:', newUser.toJSON());
            res.status(200).json(newUser);
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur:', error);
            throw error;
        }
    },

    // Lire les informations d'un wallet par ID
    getUser: async (req, res) => {
        const id = req.params.id
        const username = await User.findByPk(id)
        console.log(username)

        res.status(200).json(username);
    },

//     // Mettre à jour un wallet par ID
//     updateUser: async (req, res) => {
//         try {
//             const wallet = await User.findByPk(req.params.id);
//             if (wallet) {
//                 await wallet.update(req.body);
//                 res.json(wallet);
//             } else {
//                 res.status(404).json({ message: 'User not found' });
//             }
//         } catch (error) {
//             res.status(400).json({ error: error.message });
//         }
//     },

//     // Supprimer un wallet par ID
//     deleteUser: async (req, res) => {
//         try {
//             const wallet = await User.findByPk(req.params.id);
//             if (wallet) {
//                 await wallet.destroy();
//                 res.json({ message: 'User deleted' });
//             } else {
//                 res.status(404).json({ message: 'User not found' });
//             }
//         } catch (error) {
//             res.status(400).json({ error: error.message });
//         }
//     }
};

module.exports = userController;
