import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import routes from "./routes/index.js";

const port = 3003;
const app = express();

app.use(express.static("../frontend/build"));
app.use(cookieParser());
app.use(express.json());

app.use("/", routes);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
  app.listen(port, async () => {
    console.log(`server started on port ${port}`);
  });
});
