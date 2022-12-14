const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

//Ce plugin permet de sécuriser l'adresse email
//const cryptJs = require('crypto-js'); 

//---------- inscription avec mot de passe sécurisé et class user / async
exports.signup = async (req, res, next) => {

    console.log("email signing up : ", req.body.email);
    console.log("pwd in signing up: ", req.body.password);
   // if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(req.body.email)){
   //     if (/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/g.test(req.body.password)) {
if(true) { 
    if(true) {
        console.log('jesuis ici')
            bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    console.log('je suis ici')
                    const user = new User({
                        email: req.body.email,
                        password: hash
                    });
                    user.save()
                        .then(() => res.status(201).json({
                            message: "Utilisateur crée et sauvegardé !"
                        }))
                        .catch(error => res.status(400).json({
                            error
                        }));
                })
                .catch(error => res.status(500).json({
                        error
                    }
                ));
        }else {
            return res.status(401).json({ message: "Votre mot de passe doit contenir au minimum 8 caractères, un chiffre, une minuscule, une majusle, un caratère spécial" })
        }     
    }else {
        return res.status(401).json({ message: "Ceci n'est pas un email valide" })
    }
};

//---------- connexion à la plateforme avec vérification compte existant et verification password
// avec gestion d'erreur d'exécution de la requete au serveur, err verif mot de passe, err user not exist
exports.login =  (req, res, next) => {
    console.log("email body up : ", req.body);

    console.log("email loging up : ", req.body.email);
    console.log("pwd in loging up: ", req.body.password);

    User.findOne({
            email: req.body.email
            
        })
        .then(user => {
            console.log("user :", user.password);
            console.log("$2b$10$eReGhiP7hreRJPQUbB7kWOquR0SKlbyAzIBDQJaQ9B8vA9MNvGNS6");
            if (!user) {
                res.status(401).json({
                    message: "Account not registered"
                })
            } else {
                console.log("user 2:", user.password);
                console.log(req.body.password);
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        console.log("valid", valid)
                        if (!valid) {
                            res.status(401).json({
                                message: "Paire identifiant/mot de passe incorrecte"
                            })
                        } else {
                            res.status(200).json({
                                userId: user._id,
                                isAdmin: user.isAdmin,
                                token: jwt.sign({
                                        userId: user._id,
                                        isAdmin: user.isAdmin
                                    },
                                    `${process.env.TOKEN_SECRET}`, {
                                        expiresIn: '24h'
                                    }
                                )
                            });
                        }
                    })

                    .catch(error => {
                        console.log("hash crypt compare has fail with :", error.message);
                        res.status(500).json({
                            error
                        });
                    })
            }
        })
        .catch(error => {
            console.log("mongoDB fetch  has fail with :", error.message);
            res.status(500).json({
                error
            })
        });

};