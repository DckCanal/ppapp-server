const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = express();

// MIDDLEWARES
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/users", userRouter);

const port = process.env.PORT || 3000;
exports.launch = () => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });
};
//module.exports = app;
