// index.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 6003;
const url = process.env.MONGODB_URL;

// MongoDB connection
mongoose.set("strictQuery", false);
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

// Routes
app.use("/", require("./routes/default"));   // Default route
app.use("/", require("./routes/user"));      // User-related routes
app.use("/", require("./routes/product"));   // Product-related routes
app.use("/", require("./routes/payment"));   // Payment-related routes

// Server is running
app.listen(PORT, () => console.log("Server is running at port: " + PORT));
