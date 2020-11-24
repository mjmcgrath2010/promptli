const express = require("express");
const path = require("path");

const app = express();

// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname + "/../client/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
