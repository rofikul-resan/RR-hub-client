const express = require("express");
const userRoute = express.Router();

userRoute.post("/createUser", async (req, res) => {
  const data = req.body;
});

module.exports = userRoute;
