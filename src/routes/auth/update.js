const { Users } = require("./../../db/firebase/config");

const updateUser = async (input = {}, id) => {
  let output = await Users.doc(id).update({ ...input });

  return output.id;
};

module.exports = {
  updateUser,
};
