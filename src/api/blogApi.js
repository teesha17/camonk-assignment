import axios from "axios";

const API_URL = "http://localhost:3001/blogs";

export const fetchBlogs = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const fetchBlogById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const createBlog = async (blog) => {
  const res = await axios.post(API_URL, blog);
  return res.data;
};
