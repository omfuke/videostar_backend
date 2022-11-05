const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const email = req.body.email;
  const passowrd = req.body.password;

  console.log(req.body);
  res.status(200).json({ message: "created user" });
});

module.exports = router;
