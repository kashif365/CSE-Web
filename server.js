const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "public" folder
const frontendPath = path.join(__dirname, "../frontend/public");
app.use(express.static(frontendPath));

// Make sure "/" serves your index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
