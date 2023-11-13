const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: "",
    },
    groupeMessage: {
      type: Boolean,
      default: false,
    },
    messagePhoto: {
      type: String,
      default: null,
    },

    members: {
      type: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          roll: {
            type: String,
            enum: ["member", "admin"],
            default: "member",
          },
        },
      ],
      default: [],
    },
    messages: {
      type: [
        {
          author: {
            name: String,
            userPhoto: String,
          },
          msg: String,
          time: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      default: [],
    },
    lastMsg: {
      author: {
        name: String,
        userPhoto: String,
      },
      msg: String,
      time: {
        type: Date,
        default: Date.now,
      },
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
