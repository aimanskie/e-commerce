const axios = require('axios');
const config = require('../config/config');

const fetchProducts = async () => {
  const response = await axios.get(config.productUrl);
  return response.data.products;
};

const fetchProductById = async (productId) => {
  const response = await axios.get(`https://dummyjson.com/products/${productId}`);
  return response.data;
};

module.exports = { fetchProducts, fetchProductById };
