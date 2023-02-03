const axios = require('axios');
 
module.exports = {
  config: {
    name: "video",
    aliases: ["v"],
    version: "1.0",
    author: "munem",
    shortDescription: "Get a video",
    longDescription: "",
    category: "media",
    guide: "{v}"
  },
 
  onStart: async function({ message, args }) {
    const API_URL = "https://apivideo.nebin.repl.co/snauzk/?apikey=binee1805";
    try {
      const response = await axios.get(API_URL);
      const videoUrl = response.data.url;
      console.log(videoUrl);
    } catch (error) {
      console.error(error);
    }
  }
};