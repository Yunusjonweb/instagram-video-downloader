const axios = require("axios");

const downloaderMethod = async (instagram_url) => {
  const options = {
    method: "GET",
    url: "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php",
    params: {
      url: instagram_url,
    },
    headers: {
      "X-RapidAPI-Key": "7fb682feefmsh4f90b63ba8c955bp1ba92djsnc6ae854362b8",
      "X-RapidAPI-Host": "instagram-media-downloader.p.rapidapi.com",
    },
  };

  try {
    const response = await axios(options);
    const result = {
      videoURL: response?.data?.video,
      caption: response?.data?.caption,
    };
    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = downloaderMethod;
