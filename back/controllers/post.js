const Post = require('../models/post');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const post = require('../models/post');
const dotenv = require("dotenv").config();

exports.createPost = (req, res, next) => {
    console.log('coucouc',  req.body)
    //delete postObject._userId;
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

exports.deletePost = (req, res, next) => {
    // const postObject = 
    // req.body.userId == post.userId || req.body.userId == process.env.DB_ADMIN ? {
    //     ...post,
    //     imageUrl: (req.file?`${req.protocol}://${req.get("host")}/images/${req.file.filename}`:null)
    // } : {
    //     ...req.body
    // };
     Post.deleteOne({
            _id: req.params.id || process.env.DB_ADMIN
        })
        .then(() => {
            res.status(200).json({
                message: "Message supprimé"
            })
        })
        .catch(error => res.status(401).json({
            error
        }));
};


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