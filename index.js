const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
