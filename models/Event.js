// Event Model
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide event title"],
      trim: true,
      maxlength: [100, "Event title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide event description"],
    },
    date: {
      type: Date,
      required: [true, "Please provide event date"],
    },
    location: {
      type: String,
      required: [true, "Please provide event location"],
    },
    category: {
      type: String,
      enum: [
        "conference",
        "workshop",
        "webinar",
        "seminar",
        "networking",
        "other",
      ],
      default: "conference",
    },
    image: {
      type: String,
      default: null,
    },
    capacity: {
      type: Number,
      required: [true, "Please provide event capacity"],
      min: 1,
    },
    registeredAttendees: {
      type: Number,
      default: 0,
      min: 0,
    },
    price: {
      type: Number,
      default: 0,
      min: 0,
    },
    status: {
      type: String,
      enum: ["upcoming", "ongoing", "completed", "cancelled"],
      default: "upcoming",
    },
    speakers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Speaker",
      },
    ],
    schedule: [
      {
        time: String,
        title: String,
        description: String,
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
