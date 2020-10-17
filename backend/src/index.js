import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoConnect from "./config/mongo.config";
import peopleRoute from "./routes/people";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable("x-powered-by");

mongoConnect(
  process.env.DB_HOST,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_NAME,
  process.env.DB_PORT
);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello",
  });
});

app.use("/api", peopleRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
