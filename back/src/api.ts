import express from "express";

const app = express.Router();

app.get("/articles", (req, res) => {
  res.json([]);
});

export default app;
