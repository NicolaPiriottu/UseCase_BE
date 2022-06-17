import express from "express";
import { galleryResponse, simpleResponse } from "./src/response.js";

const app = express();

// Routes

app.get("/simple", (_, res) => {
  res.json(simpleResponse);
});

app.get("/gallery", (_, res) => {
  res.json(galleryResponse);
});

// Server Init

let port = process.env.PORT || 8200;
app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});