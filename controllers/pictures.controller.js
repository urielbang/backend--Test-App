const { default: axios } = require("axios");

const url = "https://pixabay.com/api/?key=42079125-1909400cd5615db78c9c2cb93";

async function getRandomPicturesLoad(req, res) {
  const randomPageNumber = Math.round(Math.random() * 26);
  console.log(randomPageNumber);

  try {
    const response = await axios.get(`${url}&page=${randomPageNumber}`);
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    console.log(error);

    res.status(404).json({
      data: {
        status: "fail",
      },
    });
  }
}

async function getPictureById(req, res) {
  const { id } = req.params;
  try {
    const response = await axios.get(`${url}&id=${id}`);
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      data: {
        status: "fail",
      },
    });
  }
}

async function getPicturesByPageNumber(req, res) {
  const { page } = req.params;
  try {
    const response = await axios.get(`${url}&page=${page}`);
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      data: {
        status: "fail",
      },
    });
  }
}

async function getPicturesByCategory(req, res) {
  const { category } = req.params;
  console.log(category);

  try {
    const response = await axios.get(`${url}&category=${category}`);
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      data: {
        status: "fail",
      },
    });
  }
}

module.exports = {
  getRandomPicturesLoad,
  getPictureById,
  getPicturesByPageNumber,
  getPicturesByCategory,
};
