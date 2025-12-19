// server.js
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ CORRECT FRONTEND PATH
const frontendPath = path.join(__dirname, "../frontend/public");
app.use(express.static(frontendPath));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/eventlab")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`EventLab running on http://localhost:${PORT}`);
});
