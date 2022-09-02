const User = require('../models/User.js');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwt_token = process.env.TOKEN_SECRET;

// Generate user token
const generateToken = (id) => {
    return jwt.sign({id}, jwt_token, {
        expiresIn: '7d',
    });
};

// Register user and Sign in

const register = async(req, res) => {
    res.send('Registro');
};

module.exports = { 
    register,
};