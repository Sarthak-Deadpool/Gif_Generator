/** @format */

import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
const Api = () => {
  const [gif, setGif] = useState("");

  async function getGIF(tag) {
    const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
    setGif(output.data.data.images.original.url);
  }
  useEffect(() => {
    getGIF();
  }, []);

  return { gif, getGIF };
};

export default Api;
