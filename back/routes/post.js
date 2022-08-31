const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postControllers = require('../controllers/post');


router.get('/', auth, postControllers.getAllPosts); 

// //---------- réponse retournée par le serveur en MODIFICATION / MAJ /PUT via le fichier controllers
router.post('/', auth, multer, postControllers.createPost);

//---------- réponse retourné par le serveur en RECUPERATION / GET
//router.get('/:id', auth, postControllers.getOnePost);

//---------- réponse retourné par le serveur en MODIFICATION / MAJ /PUT
router.put('/:id', auth, multer, postControllers.updatePost);

//---------- réponse retourné par le serveur en SUPPRESSION / DESTROY
router.delete('/:id', auth, postControllers.deletePost);

//---------- réponse retournée par le serveur en LIKANT ou DISLIKE one sauce
router.post('/:id/like', auth, multer, postControllers.checkPost);


module.exports = router;