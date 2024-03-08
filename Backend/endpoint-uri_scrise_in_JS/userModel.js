const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    lastActive: {
        type: Date,
        required: false,
        default: Date.now
    },
    isManager: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now
    }
},{ versionKey: false });  // Disable the version key

module.exports = mongoose.model('userModel', userSchema);