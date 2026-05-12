const express = require("express");

const app = express();
const startedAt = new Date();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Railway Docker!",
    startedAt,
    now: new Date(),
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
