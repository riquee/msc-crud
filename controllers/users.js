const express = require('express');
const rescue = require('express-rescue');
const User = require('../services/users');
const validateUser = require('../middlewares/validateUser');
const users = express.Router();

users.get(
  '/',
  rescue(async (req, res) => {}),
);

users.post(
  '/',
  validateUser,
  rescue(async (req, res, next) => {
    const { name, password, email, age } = req.body;
    const user = await User.create({ name, password, email, age });
    if (user.isError) next(user);
    res.status(201).json( user );
  }),
);

module.exports = users;
