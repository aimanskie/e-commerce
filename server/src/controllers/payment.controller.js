const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { paymentService } = require('../services');

/**
 * Create a new payment intent
 * @param {Request} req
 * @param {Response} res
 */
const createPaymentIntent = catchAsync(async (req, res) => {
  const { amount, currency } = req.body;
  const paymentIntent = await paymentService.createPaymentIntent(amount, currency);
  res.status(httpStatus.CREATED).send({ clientSecret: paymentIntent.client_secret });
});

/**
 * Retrieve payment status
 * @param {Request} req
 * @param {Response} res
 */
const getPaymentStatus = catchAsync(async (req, res) => {
  const { paymentIntentId } = req.params;
  const status = await paymentService.retrievePaymentStatus(paymentIntentId);
  res.status(httpStatus.OK).send({ status });
});

/**
 * Store successful payment information
 * @param {Request} req
 * @param {Response} res
 */
const storePaymentSuccess = catchAsync(async (req, res) => {
  const paymentData = req.body;
  await paymentService.storePaymentSuccess(paymentData);
  res.status(httpStatus.CREATED).send({ message: 'Payment successfully recorded' });
});

module.exports = {
  createPaymentIntent,
  getPaymentStatus,
  storePaymentSuccess,
};
