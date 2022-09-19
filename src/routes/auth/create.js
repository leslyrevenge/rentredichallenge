const { Users } = require("./../../db/firebase/config");

const createUser = async (input = {}) => {
  let output = await Users.add(input);
  console.log(output.id);

  return output.id;
};

module.exports = {
  createUser,
};
