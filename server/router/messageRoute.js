const express = require("express");
const Message = require("../model/messageModel");
const msgRoute = express.Router();

// create message from search
msgRoute.post("/msg", async (req, res) => {
  const members = req.body;
  const user1 = members[0];
  const user2 = members[0];
  try {
    const isExistMessage = await Message.findOne({
      members: {
        $all: [{ userId: user1.userId }, { userId: user2.userId }],
      },
    });
    console.log(isExistMessage);
    if (!isExistMessage) {
      const message = new Message();
      //   message.members.push([...members]);
      console.log([...members]);
      const result = await message.save();
      res.send(result);
    } else {
      res.send(isExistMessage);
    }
    res.end();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = msgRoute;
