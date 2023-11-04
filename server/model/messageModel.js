const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    groupeMessage: Boolean,
    messagePhoto: {
      type: String,
    },

    members: {
      type: [
        {
          userId: mongoose.Schema.Types.ObjectId,
          name: String,
          userPhoto: String,
          roll: {
            enum: ["member", "admin"],
            default: "member",
          },
          ref: "User",
        },
      ],
      default: [],
    },
    messages: {
      type: {
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
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
