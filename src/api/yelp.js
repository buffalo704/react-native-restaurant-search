import axios from "axios";

const API_KEY = '123';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      `Bearer ${API_KEY}`,
  },
});
