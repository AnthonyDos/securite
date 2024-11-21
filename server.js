const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Node.js app!" });
});
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
module.exports = app;