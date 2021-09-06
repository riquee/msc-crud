const User = require('../models/users');
const Error = require('../utils/createErros');

const create = async (user) => {
  console.log('service', user);
  const checkEmail = await User.findByEmail(user.email);
  if (checkEmail) return Error.conflict('email já cadastrado');
  return User.create(user);
};

module.exports = {
  getAll: User.getAll,
  create,
};
