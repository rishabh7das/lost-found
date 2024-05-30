import fs from "node:fs/promises";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
// const multer = require("multer");
import bodyParser from "body-parser";
import express from "express";
const cors = require("cors");
const app = express();






app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});


app.post("/signup", async (req, res) => {
  const signUpData = req.body.data;

  const newSignUpData = {
    ...signUpData,
    id: (Math.random() * 1000).toString(),
  };
  const data = await fs.readFile("./data/signupData.json", "utf8");
  const allData = JSON.parse(data);
  allData.push(newSignUpData);
  await fs.writeFile("./data/signupData.json", JSON.stringify(allData));
  res.status(201).json({ message: "Order created!" });
});

app.post("/found", async (req, res) => {
  const foundData = req.body.data;

  const newFound = {
    ...foundData,
    type: "FOUND",
  };
  const data = await fs.readFile("./data/lofo.json", "utf8");
  const allData = JSON.parse(data);
  allData.push(newFound);
  await fs.writeFile("./data/lofo.json", JSON.stringify(allData));
  res.status(201).json({ message: "Order created!" });
});

app.post("/lost", async (req, res) => {
  const foundData = req.body.data;

  const newFound = {
    ...foundData,
    type: "LOST",
  };
  const data = await fs.readFile("./data/lofo.json", "utf8");
  const allData = JSON.parse(data);
  allData.push(newFound);
  await fs.writeFile("./data/lofo.json", JSON.stringify(allData));
  res.status(201).json({ message: "Order created!" });
});

app.listen(3000);


