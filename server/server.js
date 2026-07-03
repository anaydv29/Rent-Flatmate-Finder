require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {

  console.log("User Connected:", socket.id);

  socket.on("sendMessage", (data) => {

    io.emit("receiveMessage", data);

  });

  socket.on("disconnect", () => {

    console.log("User Disconnected");

  });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});