const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  return db.collection('users').find().toArray();
};

const create = async (user) => {
  const db = await connection();
  return db.collection('users').insertOne(user);
};

module.exports = {
  getAll,
  create,
};
