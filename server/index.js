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
const cookieParser = require("cookie-parser");

const User = require("./model/userModel");
const { createJwtToken } = require("./middleware/Jwt");

//middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(cookieParser());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

mongoose.connect(`${process.env.SERVER_URL}/RR-hub`).then(() => {
  console.log("db connect");
});
app.use("/user", userRoute);
app.use("/messages", msgRoute);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("Enter-user", async ({ userId }) => {
    const result = await User.updateOne(
      { _id: userId },
      {
        $set: { isActive: true },
      }
    );
    socket.emit("setActive", { isActive: true });

    socket.on("disconnect", async () => {
      const result = await User.updateOne(
        { _id: userId },
        {
          $set: { isActive: false, lastActive: Date.now() },
        }
      );
      socket.emit("setActive", { isActive: true });
    });
  });

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

app.get("/", (req, res) => {
  res.send("server is running");
});

app.post("/jwt", async (req, res) => {
  const data = req.body;
  console.log(data);
  const token = await createJwtToken(data, process.env.JWT_SECRET);
  console.log(token);
  res.send({ token });
});

server.listen(port, () => {
  console.log("server run in ", port);
});
