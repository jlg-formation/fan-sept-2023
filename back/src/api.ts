import express from "express";

const articles = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 150 },
  { id: "a2", name: "Pelle", price: 4, qty: 25 },
];

const app = express.Router();

app.get("/articles", (req, res) => {
  res.json(articles);
});

export default app;
