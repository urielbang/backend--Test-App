const { default: axios } = require("axios");

async function getRandomPicturesLoad(req, res) {
  const randomPageNumber = Math.round(Math.random() * 26);
  console.log(randomPageNumber);

  try {
    const response = await axios.get(
      `${process.env.URL}${process.env.API_KEY}&page=${randomPageNumber}`
    );
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

async function getPictureById(req, res) {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `${process.env.URL}${process.env.API_KEY}&id=${id}`
    );
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
    const response = await axios.get(
      `${process.env.URL}${process.env.API_KEY}&page=${page}`
    );
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
    const response = await axios.get(
      `${process.env.URL}${process.env.API_KEY}&category=${category}`
    );
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
