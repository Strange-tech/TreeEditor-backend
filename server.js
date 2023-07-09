const mongoose = require("mongoose");
const WebSocket = require("ws");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("A client is in");
  ws.on("error", console.error);

  ws.on("message", (data) => {
    console.log(`receive: ${data} from client`);
  });

  ws.on("close", () => {
    console.log("A client is closed");
  });

  ws.send("Here is server!");
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("DB connected!");
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

server.on("upgrade", (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit("connection", ws, req);
  });
});
