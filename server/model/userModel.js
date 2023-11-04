const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
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
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    lastActive: { type: Date, default: Date.now },
    isActive: {
      type: Boolean,
      default: true,
    },
    friend: {
      type: [
        {
          userId: mongoose.Schema.Types.ObjectId,
          name: String,
          userPhoto: String,
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
