const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const db = await connection();
  return db.collection('users').find().toArray();
};

const findByEmail = async (email) => {
  const db = await connection();
  return db.collection('users').findOne({ email });
};

const findById = async (id) => {
  const db = await connection();
  return db.collection('users').findOne(ObjectId(id));
};

const create = async (user) => {
  const db = await connection();
  await db.collection('users').insertOne(user);
  return user;
};

const update = async (id, updates) => {
  const db = await connection();
  const { matchedCount } = await db
    .collection('users')
    .updateOne({ _id: ObjectId(id) }, { $set: updates });
  if (matchedCount) {
    const user = await findById(id);
    return user;
  }
};

const excluse = async (id) => {
  const db = await connection();
  const { deletedCount } = await db.collection('users').deleteOne({ _id: ObjectId(id) });
  return deletedCount
};

module.exports = {
  getAll,
  create,
  findByEmail,
  findById,
  update,
  excluse,
};
