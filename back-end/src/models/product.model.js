const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    price: {
      currency: {
        type: String,
        enum: ["INR", "USD"],
        default: "INR",
      },
      amount: {
        type: Number,
        required: true,
      },
    },
    category: {
      type: String,
      enum: ["ladies, men, kids, beauty, home"],
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      default: [],
    },
    sizes: [
      {
        type: String,
        enum: ["s", "m", "l", "xl", "xxl"],
        default: ["m"],
      },
    ],
    colors: [
      {
        type: String,
      },
    ],
    seller_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "seller",
    },
  },
  {
    timestamps: true,
  }
);

let ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;
