const express = require('express');
const rescue = require('express-rescue');
const users = express.Router();

users.get(
  '/',
  rescue(async (req, res) => {

  }),
);

users.post(
  '/',
  rescue(async (req, res) => {
    
  }),
);

module.exports = users;
