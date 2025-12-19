// Speaker Model
const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide speaker name"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Please provide speaker title"],
      trim: true,
    },
    bio: {
      type: String,
      required: [true, "Please provide speaker bio"],
    },
    image: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      required: [true, "Please provide speaker email"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
    },
    phone: {
      type: String,
      default: null,
    },
    socialLinks: {
      facebook: String,
      twitter: String,
      linkedin: String,
      instagram: String,
    },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    expertise: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Speaker", speakerSchema);
