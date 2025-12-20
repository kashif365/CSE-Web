const path = require("path");
const express = require("express");
const app = express();

// Correct static folder path
const frontendPath = path.join(__dirname, "public"); // if public is in backend folder
app.use(express.static(frontendPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
