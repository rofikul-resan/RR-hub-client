const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    userPhoto: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastActive: { type: Date, default: Date.now },
    friend: {
      type: [
        {
          userId: mongoose.Schema.Types.ObjectId,
          name: String,
          userPhoto: String,
          ref: "User",
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
