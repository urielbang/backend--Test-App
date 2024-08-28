const { default: axios } = require("axios");

async function getRandomPicturesLoad(req, res) {
  try {
    const response = await axios.get(
      `${process.env.URL}${process.env.API_KEY}`
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

module.exports = { getRandomPicturesLoad };
