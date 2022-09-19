const { Users } = require("./../../db/firebase/config");

const updateUser = async (input = {}, id) => {
  console.log(input, "updated");

  let output = await Users.doc(id).update({ ...input });

  return output.id;
};

module.exports = {
  updateUser,
};
