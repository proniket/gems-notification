import axios from "axios";

import { BASE_URL, BLOGS, FAQ } from "../utils/constant";

// export const getMarketplaceData = () => {
//   return axios.get("searchResult.json").then((res) => res.data);
// };

const api: any = axios.create({
  baseURL: BASE_URL,
});
export const getHerokuApp = () => {
  return api.get(`${FAQ}`);
};

export const getBlock = () => {
  return api.get(`${BLOGS}`);
};
