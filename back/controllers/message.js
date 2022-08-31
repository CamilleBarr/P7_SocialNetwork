const Message = require('../models/Message');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require("dotenv").config();

exports.createMessage = (req, res, next) => {
    const messageObject = JSON.parse(req.body.message);
    delete messageObject._id;
    //delete messageObject._userId;
    const newMessage = new Message({
        ...messageObject,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: [" "],
        usersDisliked: [" "],
    });

    newMessage.save()
        .then(() => {
            res.status(201).json({
                message: "Message enregistré !"
            })
        })
        .catch(error => res.status(400).json({
            error
        }));
};

exports.updateMessage = (req, res, next) => {
    const messageObject = req.file ? {
        ...JSON.parse(req.body.mesage),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    } : {
        ...req.body
    };
    Message.updateOne({
            _id: req.params.id
        }, {
            ...messageObject,
            _id: req.params.id
        })
        .then(() => res.status(200).json({
            message: 'Message modifié !'
        }))
        .catch(error => res.status(402).json({
            error
        }));
};

exports.getOneMessage = (req, res, next) => {
    Message.findOne({
            _id: req.params.id
        })
        .then(Message => res.status(200).json(Message))
        .catch(error => res.status(400).json({
            error
        }));
};

exports.getAllMessages = (req, res, next) => {
    Message.find()
        .then(Message => res.status(200).json(Message))
        .catch(error => res.status(400).json({
            error
        }));
};

exports.deleteMessage = (req, res, next) => {
    const messageObject = req.file ? {
        ...JSON.parse(req.body.message),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    } : {
        ...req.body
    };
    Message.deleteOne({
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


exports.checkMessage = (req, res, next) => {
    let like = req.body.like;
    let userId = req.body.userId;

    Message.findOne({
            _id: req.params.id
        })
        .then(function (message) {
            switch (like) {
                case 1:
                    if (
                        !message.usersLiked.includes(userId) && like === 1
                    ) {
                        Message.updateOne({
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
                    if (message.usersLiked.includes(userId)) {
                        Message.updateOne({
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
                    if (message.usersDisliked.includes(userId)) {
                        Message.updateOne({
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