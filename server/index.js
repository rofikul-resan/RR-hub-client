const express = require("express");
const cors = require("cors");
const userRoute = require("./router/userRouter");
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log("server run in ", port);
});
