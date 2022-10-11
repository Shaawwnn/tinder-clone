import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://merncluster:IvHaxd1NBY5IstaS@merncluster.amwemel.mongodb.net/tinderDB?retryWrites=true&w=majority`;

//Middlewares
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(connection_url);

//API Endpoints
app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello World");
});

app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/card", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listeners
app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});
