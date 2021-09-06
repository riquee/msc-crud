const users = require('../schemas/users');

module.exports = (req, res, next) => {
  const { error } = users.validate(req.body);
  console.log('chegou aqui')
  if (error) next(error);
  next();
};
