const express = require("express");
const Route = require("./routes/route");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.raw());
app.use(express.urlencoded({ extended: true }));
app.use(Route);

app.listen(3000, () => {
  console.log("TEST");
});
