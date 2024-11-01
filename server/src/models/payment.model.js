const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const paymentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: 'usd',
    },
    paymentIntentId: {
      type: String,
      required: true,
      unique: true,
    },
    paymentMethod: {
      type: String,
    },
    status: {
      type: String,
      enum: ['succeeded', 'requires_payment_method', 'requires_action', 'processing', 'canceled'],
      required: true,
    },
    receiptEmail: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    metadata: {
      type: Map,
      of: String,
    },
  },
  {
    timestamps: true,
  }
);

paymentSchema.plugin(toJSON);
paymentSchema.plugin(paginate);

/**
 * @typedef Payment
 */
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
