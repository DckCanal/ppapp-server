const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRouter = require("./routes/userRoutes");

dotenv.config({ path: "./config.env" });
const env = process.env.NODE_ENV;

const MongoDB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(MongoDB, { useNewUrlParser: true })
  .then(
    (con) => {
      env === "development" &&
        console.log("Connected to MongoDB Atlas - ilsalice DB");
      return con;
    },
    (err) => {
      env === "development" &&
        console.error(`Error connecting to MongoDB Atlas:
    ${err}`);
      return err;
    }
  )
  .catch(
    (err) =>
      env === "development" &&
      console.error(`Error connecting to MongoDB Atlas:
  ${err}`)
  );

if (env === "development") {
  mongoose.connection.on("error", (err) =>
    console.error(`There was an error in the connection with MongoDB Atlas:
    ${err}`)
  );
  mongoose.connection.on("disconnected", () =>
    console.log("Disconnected from MongoDB Atlas")
  );
}

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
