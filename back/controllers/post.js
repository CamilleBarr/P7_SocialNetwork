const Post = require('../models/post');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require("dotenv").config();

exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.post);
    delete postObject._id;
    //delete postObject._userId;
    const newPost = new Post({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: [" "],
        usersDisliked: [" "],
    });

    newPost.save()
        .then(() => {
            res.status(201).json({
                message: "Message enregistré !"
            })
        })
        .catch(error => res.status(400).json({
            error
        }));
};

exports.updatePost = (req, res, next) => {
    const postObject = req.file ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    } : {
        ...req.body
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
};



exports.getAllPosts = (req, res, next) => {
    Post.find()
        .then(Post => res.status(200).json(Post))
        .catch(error => res.status(400).json({
            error
        }));
};

exports.deletePost = (req, res, next) => {
    const postObject = req.file ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    } : {
        ...req.body
    };
    Post.deleteOne({
            _id: req.params.id
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
                                },
                                {
                                    $inc: {likes: 1
                                    },
                                    $push: {usersLiked: userId
                                    }
                                }
                            )
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
                                },
                                {
                                    $inc: {likes: -1
                                    },
                                    $pull: {usersLiked: userId
                                    },
                                }
                            )
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
                                },
                                {
                                    $inc: {dislikes: -1
                                    },
                                    $pull: {usersDisliked: userId
                                    },
                                }
                            )
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