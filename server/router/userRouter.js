const express = require("express");
const userRoute = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");

userRoute.post("/create-user", async (req, res) => {
  try {
    const data = req.body;
    const isExist = await User.findOne({ email: data.email });
    console.log(isExist);
    if (isExist) {
      res.status(403).send({ error: "This email is already used" });
    } else {
      const hashPass = await bcrypt.hash(data.password, 5);
      const userData = { ...data };
      userData.password = hashPass;
      const user = new User(userData);
      const result = await user.save();
      const { name, email, lastActive, userPhoto, friend } = result;
      res.json({
        name,
        email,
        lastActive,
        userPhoto,
        friend,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

module.exports = userRoute;
