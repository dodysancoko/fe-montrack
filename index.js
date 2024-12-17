const express = require("express");
const Route = require("./routes/route");
const cors = require("cors");
const UserRoute = require("./modules/user/route");
const corsMiddleware = require("./middlewares/cors");
const authRouter = require("./modules/auth/route");
const { default: mongoose } = require("mongoose");
const TransRouter = require("./modules/transaksi/route");

const app = express();
app.use(cors());
app.use(corsMiddleware);
app.use(express.json());

app.use("/api", Route);
app.use("/api/user", UserRoute);
app.use("/auth", authRouter);
app.use("/transaction", TransRouter);

app.use(express.raw());
app.use(express.urlencoded({ extended: true }));
app.use(Route);

mongoose
  .connect("mongodb://localhost:27017/montrackdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
