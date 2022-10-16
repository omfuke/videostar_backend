const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.json({ name: "om fuke" });
});
app.listen(5000, () => {
  console.log("connected to 5000");
});
