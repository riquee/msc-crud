const express = require('express');
const rescue = require('express-rescue');
const User = require('../services/users');
const validateUser = require('../middlewares/validateUser');
const users = express.Router();

users.get(
  '/',
  rescue(async (req, res) => {
    const listUsers = await User.getAll();
    res.status(200).json(listUsers);
  }),
);

users.post(
  '/',
  validateUser,
  rescue(async (req, res, next) => {
    const { name, password, email, age } = req.body;
    const user = await User.create({ name, password, email, age });
    if (user.isError) next(user);
    res.status(201).json(user);
  }),
);

users.put(
  '/:id',
  validateUser,
  rescue(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.update(id, req.body);
    if (user.isError) next(user);
    res.status(201).json(user);
  }),
);

users.delete(
  '/:id',
  rescue(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.excluse(id);
    if (user.isError) next(user);
    res.status(201).json({ message: 'usuario deletado com sucesso'});
  }),
);

module.exports = users;
