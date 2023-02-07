const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 3000;

app.use(express.json());

app.get("/posts", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json([
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ]);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

