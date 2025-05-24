const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware.js");
const {
  addToCart,
  updateCartItem,
  removeFromCart,
} = require("../controllers/cartController");

router.post("/", auth, addToCart);
router.put("/:id", auth, updateCartItem);
router.delete("/:id", auth, removeFromCart);

module.exports = router;
