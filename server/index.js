const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./router/userRouter");
const msgRoute = require("./router/messageRoute");
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");

//middleware
app.use(cors());
app.use(express.json());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

mongoose.connect(`${process.env.SERVER_URL}/RR-hub`).then(() => {
  console.log("db connect");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("r-chat", ({ userId }) => {
    socket.join(userId);
    console.log(userId);

    socket.on("disconnect", () => {
      console.log("leave");
      socket.leave(userId);
    });
  });

  socket.on("new-msg", (msgData, targetId) => {
    socket.to(targetId).emit("msg", msgData);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.use("/user", userRoute);
app.use("/messages", msgRoute);

app.get("/", (req, res) => {
  res.send("server is running");
});

server.listen(port, () => {
  console.log("server run in ", port);
});
