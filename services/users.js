const User = require('../models/users');
const Error = require('../utils/createErros');

const create = async (user) => {
  const checkEmail = await User.findByEmail(user.email);
  if (checkEmail) return Error.conflict('email já cadastrado');
  return User.create(user);
};

const update = async (id, updates) => {
  const checkUser = await User.findById(id);
  if (!checkUser) return Error.unauthorized('id invalido');
  const user = User.update(id, updates);
  if (!user) return Error.notFound('não foi possivel atualizar usuario');
  return user
}

module.exports = {
  getAll: User.getAll,
  create,
};
