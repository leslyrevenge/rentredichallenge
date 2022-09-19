const { Users } = require("./../../db/firebase/config");

const dropUser = async (id) => {
  await Users.doc(id).delete();
  return id;
};

module.exports = {
  dropUser,
};
