const Stripe = require('stripe');
const config = require('../config/config');
const logger = require('../config/logger');
const { Payment } = require('../models');

const stripe = Stripe(config.stripeSecretKey);

/**
 * Create a payment intent
 * @param {number} amount
 * @param {string} currency
 * @returns {Promise}
 */
const createPaymentIntent = async (amount, currency = 'myr') => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ['card'],
    });
    return paymentIntent;
  } catch (error) {
    logger.error('Error creating payment intent:', error);
    throw new Error('Payment intent creation failed');
  }
};

/**
 * Retrieve payment intent status
 * @param {string} paymentIntentId
 * @returns {Promise}
 */
const retrievePaymentStatus = async (paymentIntentId) => {
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
  return paymentIntent.status;
};

/**
 * Store payment success information
 * @param {object} paymentData
 * @returns {Promise}
 */
const storePaymentSuccess = async (paymentData) => {
  await Payment.create(paymentData);
  return true;
};

module.exports = {
  createPaymentIntent,
  retrievePaymentStatus,
  storePaymentSuccess,
};
