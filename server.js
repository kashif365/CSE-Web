const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const { title } = require("process");

const app = express();

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);
app.set("layout", "layouts/main");

// static assets
app.use(express.static(path.join(__dirname, "public")));


// routes
app.get("/", (req, res) => {res.render("pages/home", { title: "SCE-DUET" });});
app.get('/about', (req, res) => {res.render('pages/about', { title: 'About Us' });});
app.get('/event', (req, res) => {res.render('pages/event', { title: 'Event' });});
app.get('/speaker', (req, res) => {res.render('pages/speaker', { title: 'Speaker' });});
app.get('/blog', (req, res)=>{res.render('pages/blog', {title: 'Blog'});});
app.get('/contact', (req, res) => {res.render('pages/contact', { title: 'Contact' });});
app.get('/gallary', (req, res) => {res.render('pages/gallary', { title: 'Gallary' });});











//server
app.listen(3000, () => {  console.log("Server running on port 3000");});
