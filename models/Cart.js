const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  userId: String,
  products: [
    {
      productId: String,
      quantity: String,
    },
  ],
});
module.exports = mongoose.model("Cart", cartSchema);
