const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pictureRouter = require("./routes/picture.routes");

const app = express();

//! uses

app.use(express.json());
app.use(cors());

//! request uses

app.use("/api/v1/pictures", pictureRouter);

module.exports = app;
