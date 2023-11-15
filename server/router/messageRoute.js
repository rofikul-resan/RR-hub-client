const express = require("express");
const Message = require("../model/messageModel");
const msgRoute = express.Router();

// create message from search
msgRoute.post("/msg", async (req, res) => {
  const members = req.body;
  const user1 = members[0];
  const user2 = members[1];
  try {
    const isExistMessage = await Message.findOne({
      $and: [{ "members.user": user1 }, { "members.user": user2 }],
    });
    if (!isExistMessage) {
      const message = new Message({
        members: [{ user: user1 }, { user: user2 }],
      });
      const createMsg = await message.save();
      res.send({ messageId: createMsg._id });
    } else {
      res.send({ messageId: isExistMessage._id });
    }
    res.end();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

msgRoute.get("/msg/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Message.findById(id).populate(
      "members.user",
      "name  email  isActive lastActive userPhoto"
    );
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

msgRoute.get("/user", async (req, res) => {
  const userId = req.query.userId;
  console.log("user", userId);
  try {
    const userMessage = await Message.find({
      "members.user": userId,
    })
      .populate("members.user", "name  email  isActive lastActive userPhoto")
      .select({ messages: 0 })
      .sort({ updatedAt: -1 });
    res.send(userMessage);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

msgRoute.put("/:id", async (req, res) => {
  const msg = req.body;
  const id = req.params.id;
  const result = await Message.updateOne(
    { _id: id },
    {
      $push: { messages: msg },
      $set: { lastMsg: msg },
    }
  ).populate("members.user", "name  email  isActive lastActive userPhoto");
  res.send(result);
});

module.exports = msgRoute;
