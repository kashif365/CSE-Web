require("dotenv").config();
const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./config/database");

const app = express();

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Connect to Database (optional - only if MONGODB_URI is provided)
if (process.env.MONGODB_URI) {
  connectDB().catch((err) => {
    console.warn("MongoDB connection failed, continuing without database:", err.message);
  });
}
// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);
app.set("layout", "layouts/main");

// static assets
app.use(express.static(path.join(__dirname, "public")));

// favicon fix (prevents 502)
// app.get("/favicon.ico", (req, res) => res.sendStatus(204));

// routes
app.get("/", (req, res) => {
  res.render("pages/home", { title: "SCE-DUET" });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "About Us" });
});

app.get("/event", (req, res) => {
  res.render("pages/event", { title: "Event" });
});

app.get("/speaker", (req, res) => {
  res.render("pages/speaker", { title: "Speaker" });
});

app.get("/blog", (req, res) => {
  res.render("pages/blog", { title: "Blog" });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "Contact" });
});

app.get("/gallary", (req, res) => {
  res.render("pages/gallary", { title: "Gallary" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// error handler (fixes Railway 502)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
