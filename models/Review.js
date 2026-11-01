const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    reviewTitle: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 15,
    },
    reviewBody: {
      type: String,
      required: true,
      minLength: 20,
      maxLength: 70,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
