import axios from "axios";

const NEWS_API_BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL;
const NEWS_API_KEY = process.env.REACT_APP_API_KEY;

export const getNewsService = async ({ searchQuery = "technology" }) => {
  try {
    const path = "/everything";
    const query = `?q=${searchQuery}&apiKey=${NEWS_API_KEY}`;
    const url = `${NEWS_API_BASE_URL}${path}${query}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      const additionalObj = {
        category: searchQuery,
      };
      response.data = {
        ...response.data,
        ...additionalObj,
      };
    }
    return response;
  } catch (error) {
    console.error("Error getting Tech News:", error);
  }
};
