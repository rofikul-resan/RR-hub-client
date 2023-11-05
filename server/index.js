const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./router/userRouter");
const msgRoute = require("./router/messageRoute");
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

mongoose.connect(`${process.env.SERVER_URL}/RR-hub`).then(() => {
  console.log("db connect");
});
app.use("/user", userRoute);
app.use("/messages", msgRoute);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log("server run in ", port);
});
