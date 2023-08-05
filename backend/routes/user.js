const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

router.post("/signup", async (req, res) => {
  const { email } = req.body;

  userModel.findOne({ email: email }, (err, result) => {
    if (result) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({ message: "Successfully signed up", alert: true });
    }
  });
});

router.post("/login", (req, res) => {
  const { email } = req.body;
  userModel.findOne({ email: email }, (err, result) => {
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      res.send({
        message: "Login is successful",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  });
});

module.exports = router;
