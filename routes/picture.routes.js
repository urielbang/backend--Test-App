const express = require("express");
const { getRandomPicturesLoad } = require("../controllers/pictures.controller");

const router = express.Router();

router.route("/").get(getRandomPicturesLoad);

module.exports = router;
