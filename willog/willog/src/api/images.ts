import axios from "axios";

const getImages = async (params: {
  page: number;
  per_page: number;
  order_by: string;
}) => {
  const response = await axios.get("https://api.unsplash.com/photos", {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    },
    params: params,
  });
  const data = response.data;
  return data;
};

export { getImages };
