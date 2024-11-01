const express = require('express');
const { paymentController } = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/').get(auth('getPayments'), paymentController.getPayments);

router.route('/:paymentId').get(auth('getPayments'), paymentController.getPayment);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Payment retrieval
 */

/**
 * @swagger
 * /payments:
 *   get:
 *     summary: Get all payments
 *     description: Retrieve all payments.
 *     tags: [Payments]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Payment'
 */

/**
 * @swagger
 * /payments/{paymentId}:
 *   get:
 *     summary: Get a payment
 *     description: Retrieve a single payment by ID.
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *         schema:
 *           type: string
 *         description: Payment ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Payment'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
