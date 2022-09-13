const Post = require('../models/post');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require("dotenv").config();

exports.createPost = (req, res, next) => {
    console.log('coucouc',  req.body)
    const post = new Post({
        title: req.body.title,
        userId: req.body.userId,
        message: req.body.message,
        imageUrl: (req.file?`${req.protocol}://${req.get("host")}/images/${req.file.filename}`:null),
        likes: 0,
        usersLiked: [" "],
        date: Date.now()
    });

    post.save()
        .then(() => {
            res.status(201).json({
                message: "Message enregistré !"
            })
        })
        .catch(error => {
        console.log('error', error)
            res.status(400).json({
                error
            })
        });
};

exports.updatePost = (req, res, next) => {
    if (req.auth.userId === Post.userId || req.auth.userId === process.env.DB_ADMIN) {
        const postObject = req.file ? {
            ...(req.body.message),
            imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
        } : {
            ...req.body.message
        };
        Post.updateOne({
                _id: req.params.id
            }, {
                ...postObject,
                _id: req.params.id
            })
            .then(() => res.status(200).json({
                message: 'Message modifié !'
            }))
            .catch(error => res.status(402).json({
                error
            }));
    }
};

exports.getAllPosts = (req, res, next) => {
    Post.find()
        .then((posts) => {
            posts.sort((a, b) => b.date - a.date);
            res.status(200).json(posts)
        })
        .catch(error => res.status(400).json({
            error
        }));
};

exports.deletePost = ('delete/post/:id', (req, res, next) => {
    Post.findOne({ "_id" : req.params.id })//--On trouve l'objet dans la base de données 
        .then((Post)  => {
            console.log('req.params',Post)
            const {userId, isAdmin} = req.params.currentUser;
            console.log('Post.userId !== req.body.userId', Post.userId , userId)
            console.log('req.body.userId !== process.env.DB_ADMIN', isAdmin , false)
            if (Post.userId !== userId && isAdmin !== true) {
              return res.status(403).json({ message: 'Requête non autorisée !'})
            }else {
                Post.deleteOne({ "_id" : req.params.id })//--Ici, pas besoin de 2eme argument car c'est une suppression
                    .then(() => res.status(200).json({ message: 'Post supprimé !'}))
                    .catch(error => res.status(400).json({ error }));
                }
        })
        .catch(error => res.status(500).json({ error }));
    });
console.log("test back delete export haut d'export");


exports.checkPost = (req, res, next) => {
    let like = req.body.like;
    let userId = req.body.userId;

    Post.findOne({
            _id: req.params.id
        })
        .then(function (post) {
            switch (like) {
                case 1:
                    if (
                        !post.usersLiked.includes(userId) && like === 1
                    ) {
                        Post.updateOne({
                                _id: req.params.id
                            }, {
                                $inc: {
                                    likes: 1
                                },
                                $push: {
                                    usersLiked: userId
                                }
                            })
                            .then(function () {
                                res.status(201).json({
                                    message: "Ce message est enregistré dans vos favoris"
                                });
                            })
                            .catch(function (error) {
                                res.status(400).json({
                                    error: error
                                });
                            });
                    }
                    break;

                case 0:
                    if (post.usersLiked.includes(userId)) {
                        Post.updateOne({
                                _id: req.params.id
                            }, {
                                $inc: {
                                    likes: -1
                                },
                                $pull: {
                                    usersLiked: userId
                                },
                            })
                            .then(function () {
                                res.status(201).json({
                                    message: "Ce message n'est plus enregistré dans vos favoris"
                                });
                            })
                            .catch(function (error) {
                                res.status(400).json({
                                    error: error
                                });
                            });
                    }
                    if (post.usersDisliked.includes(userId)) {
                        Post.updateOne({
                                _id: req.params.id
                            }, {
                                $inc: {
                                    dislikes: -1
                                },
                                $pull: {
                                    usersDisliked: userId
                                },
                            })
                            .then(function () {
                                res.status(201).json({
                                    message: "Ce message n'est plus enregistré dans vos messages détestés"
                                });
                            })
                            .catch(function (error) {
                                res.status(400).json({
                                    error: error
                                });
                            });
                    }
                    break;
            }
        })
        .catch(function (error) {
            res.status(404).json({
                error: error
            });
        });
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({
            _id: req.params.id
        })
        .then(Post => res.status(200).json(Post))
        .catch(error => res.status(400).json({
            error
        }));
};