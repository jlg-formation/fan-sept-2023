import express, { json } from "express";
import crypto from "node:crypto";

const articles = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 150 },
  { id: "a2", name: "Pelle", price: 4, qty: 25 },
];

const app = express.Router();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(json());

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/articles", (req, res) => {
  const newArticle = req.body;
  const article = { ...newArticle, id: crypto.randomUUID() };
  articles.push(article);
  res.status(201).end();
});

export default app;
