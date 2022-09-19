const ErrorModel = require("../db/mongodb/models/Errors");
const sendError = async (error, res) => {
  // mongodb for error login
  try {
    let payload = {
      status: error.status,
      message: error.message,
      error_type: error.type || "server",
    };

    let errorModel = new ErrorModel(payload);
    await errorModel.save();
  } catch (error) {}
  // msg for custom message or simply send server error
  res.status(error.status || 501).send(error.msg || "Server Error");
};

module.exports = {
  sendError,
};
