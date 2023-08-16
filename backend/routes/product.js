// routes/product.js
const express = require("express");
const router = express.Router();
const productModel = require("../models/product");

// Upload product route
router.post("/uploadProduct", async (req, res) => {
  const data = await productModel(req.body);
  const datasave = await data.save();
  res.send({ message: "Upload successfully" });
});

// Fetch products route
router.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});

module.exports = router;
