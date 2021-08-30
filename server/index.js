import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/post.js";
import userRoutes from "./routes/user.js";
import subRoutes from "./routes/sub.js";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
app.use("/user", userRoutes);
app.use("/sub", subRoutes);
const CONNECTION_URL =
  "mongodb+srv://ernesto:BtPGaNFs8Y3Mpf3q@main.yotdb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`${PORT}`)))
  .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);
