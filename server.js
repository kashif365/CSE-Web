require("dotenv").config();

const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layouts/main");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.get("/", (req, res, next) => {
  try {
    res.render("pages/home", { title: "SCE-DUET" });
  } catch (err) {
    next(err);
  }
});

app.get("/about", (req, res, next) => {
  try {
    res.render("pages/about", { title: "About Us" });
  } catch (err) {
    next(err);
  }
});

app.get("/event", (req, res, next) => {
  try {
    res.render("pages/event", { title: "Event" });
  } catch (err) {
    next(err);
  }
});

app.get("/speaker", (req, res, next) => {
  try {
    res.render("pages/speaker", { title: "Speaker" });
  } catch (err) {
    next(err);
  }
});

app.get("/blog", (req, res, next) => {
  try {
    res.render("pages/blog", { title: "Blog" });
  } catch (err) {
    next(err);
  }
});

app.get("/contact", (req, res, next) => {
  try {
    res.render("pages/contact", { title: "Contact" });
  } catch (err) {
    next(err);
  }
});

app.get("/gallary", (req, res, next) => {
  try {
    res.render("pages/gallary", { title: "Gallary" });
  } catch (err) {
    next(err);
  }
});

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.use((err, req, res, next) => {
  console.error("Error:", err.message, "at", req.path);
  res.status(err.status || 500).send(`<h1>Error 500</h1><p>${err.message}</p>`);
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use`);
  } else {
    console.error("Server error:", err);
  }
  process.exit(1);
});
