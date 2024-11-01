const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');

const getProducts = catchAsync(async (req, res) => {
  const products = await productService.fetchProducts();
  res.status(httpStatus.OK).send(products);
});

const getProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const product = await productService.fetchProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.status(httpStatus.OK).send(product);
});

module.exports = {
  getProducts,
  getProduct,
};
