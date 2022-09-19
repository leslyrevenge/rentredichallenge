//**** Internal Modules */
const http = require("http");
// external modules
const express = require("express");
const dotenv = require("dotenv");
const Routes = require("./routes");
const Socket = require("./socket");
const { connectDB } = require("./db/mongodb/config");
const cors = require("cors");

const LOCALHOST_ADDRESS = process.env.LOCALHOST_ADDRESS;

// init env variables
dotenv.config();
// init express
const app = express();
connectDB();

var allowlist = [LOCALHOST_ADDRESS];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = {
      origin: true,
      optionSuccessStatus: 200,
      credentials: true,
    }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

async function run(pid) {
  try {
    // to parse json object in body
    app.use(express.json({ extended: false }));
    // initialize routes
    Routes.run(app);

    // get the port number or set to default
    const PORT = process.env.PORT || 5000;

    // via http server instead of express for:
    // - with other servers such as websocket && graphql
    const httpServer = http.createServer(app);
    // my example of running socket with restful api
    Socket.run({ httpServer, app });
    await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Worker ready at http://localhost:${PORT}`, pid);
    return { app };
  } catch (error) {
    console.log(error, "server error");
  }
}

exports.run = run;
