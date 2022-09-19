const { Server } = require("socket.io");

const run = ({ httpServer }) => {
  const io = new Server(httpServer);
  // testing connections
  io.on("connection", async (socket) => {
    // out of scope.
    // only for proof of skills
  });
};

exports.run = run;
