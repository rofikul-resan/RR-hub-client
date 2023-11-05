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
      $and: [{ "members._id": user1._id }, { "members._id": user2._id }],
    });
    console.log(isExistMessage);
    if (!isExistMessage) {
      const message = new Message();
      const createMsg = await message.save();
      const result = await Message.updateOne(
        { _id: createMsg._id },
        {
          $push: {
            members: { $each: [user1, user2] },
          },
        }
      );
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
    const result = await Message.findById(id);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

msgRoute.get("/user", async (req, res) => {
  const userId = req.query.userId;
  try {
    const userMessage = await Message.find({
      "members._id": userId,
    }).select({ messages: 0 });
    res.send(userMessage);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

msgRoute.put("/:id", async (req, res) => {
  const msg = req.body;
  const id = req.params.id;
  console.log(msg);
  const result = await Message.updateOne(
    { _id: id },
    {
      $push: { messages: msg },
    }
  );
  res.send(result);
});

module.exports = msgRoute;
