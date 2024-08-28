const express = require("express");
const {
  getRandomPicturesLoad,
  getPictureById,
  getPicturesByPageNumber,
  getPicturesByCategory,
} = require("../controllers/pictures.controller");

const router = express.Router();

router.route("/").get(getRandomPicturesLoad);
router.route("/:id").get(getPictureById);
router.route("/pageNumber/:page").get(getPicturesByPageNumber);
router.route("/pageCategory/:category").get(getPicturesByCategory);

module.exports = router;
