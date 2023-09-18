const express = require("express");

const app = express.Router();

app.get("/articles", (req, res) => {
  res.json([]);
});

module.exports = app;
