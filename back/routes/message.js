const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const mainControllers = require('../controllers/message');


router.get('/', auth, mainControllers.getAllMessages); 

// //---------- réponse retournée par le serveur en MODIFICATION / MAJ /PUT via le fichier controllers
router.post('/', auth, multer, mainControllers.createMessage);

//---------- réponse retourné par le serveur en RECUPERATION / GET
router.get('/:id', auth, mainControllers.getOneMessage);

//---------- réponse retourné par le serveur en MODIFICATION / MAJ /PUT
router.put('/:id', auth, multer, mainControllers.updateMessage);

//---------- réponse retourné par le serveur en SUPPRESSION / DESTROY
router.delete('/:id', auth, mainControllers.deleteMessage);

//---------- réponse retournée par le serveur en LIKANT ou DISLIKE one sauce
router.post('/:id/like', auth, multer, mainControllers.checkMessage);


module.exports = router;