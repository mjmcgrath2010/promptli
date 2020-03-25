const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("/static/widget", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/static/widget/:name", function(req, res) {
  const name = req.params.name;
  res.sendFile(path.join(__dirname, "build", name));
});

app.listen(process.env.PORT || 3001);
