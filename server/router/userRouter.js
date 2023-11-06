const express = require("express");
const userRoute = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
const { verifyJWT } = require("../middleware/Jwt");

userRoute.get("/logged-user", verifyJWT, async (req, res) => {
  try {
    const email = req.decode.email;
    const user = await User.findOne({ email: email }).select({ password: 0 });
    res.send(user);
  } catch {
    console.log("err");
  }
});

userRoute.get("/search", async (req, res) => {
  const searchKye = req.query.key;
  try {
    if (searchKye) {
      const result = await User.find({
        $or: [
          { name: { $regex: searchKye, $options: "i" } },
          { email: { $regex: searchKye, $options: "i" } },
        ],
      }).select("name userPhoto");
      res.send(result);
    } else {
      res.end();
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

userRoute.post("/create-user", async (req, res) => {
  try {
    const data = req.body;
    const isExist = await User.findOne({ email: data.email });
    if (isExist) {
      res.status(403).send({ error: "This email is already used" });
    } else {
      const hashPass = await bcrypt.hash(data.password, 5);
      const userData = { ...data };
      userData.password = hashPass;
      const user = new User(userData);
      const result = await user.save();
      const { name, email, lastActive, userPhoto, friend, isActive, _id } =
        result;
      res.json({
        name,
        email,
        lastActive,
        userPhoto,
        friend,
        isActive,
        _id,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

userRoute.post("/login", async (req, res) => {
  const userData = req.body;
  try {
    const isExist = await User.findOne({ email: userData.email }).select(
      "email password"
    );

    if (!isExist) {
      return res.status(404).send({ error: "Incerate email or password" });
    }
    //password validation
    const isValid = await bcrypt.compare(userData.password, isExist.password);
    if (!isValid) {
      return res.status(404).send({ error: "Incerate email or password" });
    }
    const result = await User.findById(isExist._id).select({ password: 0 });

    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = userRoute;
