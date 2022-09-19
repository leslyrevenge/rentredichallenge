const { Users } = require("./../../db/firebase/config");

const createUser = async (input = {}) => {
  let output = await Users.add(input);
  console.log(output);
  return "testing";
};

module.exports = {
  createUser,
};
