const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        required: true,
        default:0,
    },
    dislikes: {
        type: Number,
        required: true,
        default : 0,
    },
    usersLiked: {
        type: [String],
        required: true
    },
    usersDisliked: {
        type: [String],
        required: true
    },
});

module.exports = mongoose.model('Message', messageSchema);