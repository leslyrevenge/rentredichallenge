const { Users } = require("./../../db/firebase/config");

const listUsers = async (input = {}) => {
  let res = await Users.get();
  let output = [];

  res.forEach((doc) => {
    let payload = {
      ...doc.data(),
      id: doc.id,
    };
    output.push(payload);
  });

  return output;
};

module.exports = {
  listUsers,
};
