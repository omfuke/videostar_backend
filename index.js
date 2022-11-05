const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const movies = require("./movies/movies");
const auth = require("./Authentication/auth");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});

app.use("/", movies);
app.use("/auth/", auth);

mongoose
  .connect(
    "mongodb+srv://omfuke:omfuke@cluster0.qwj9we2.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Connected to DB");
    app.listen(5000, () => {
      console.log("connected to 5000");
    });
  })
  .catch((err) => console.log(err.message));
