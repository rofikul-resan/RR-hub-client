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
      $and: [{ "members._id": user1._id }, { "members._id": user1._id }],
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

module.exports = msgRoute;
