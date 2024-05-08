import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import path from "path";

const port = 3003;
const app = express();

app.use(express.static("../frontend/build"));
app.use(cookieParser());
app.use(express.json());

app.use("/", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("../frontend/build", "index.html"));
  });
}

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
  app.listen(port, async () => {
    console.log(`server started on port ${port}`);
  });
});
