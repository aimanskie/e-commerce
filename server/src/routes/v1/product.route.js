const express = require('express');
const productController = require('../../controllers/product.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/').get(auth('getProducts'), productController.getProducts);

router.route('/:productId').get(auth('getProducts'), productController.getProduct);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product retrieval
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     description: Retrieve all products.
 *     tags: [Products]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /products/{productId}:
 *   get:
 *     summary: Get a product
 *     description: Retrieve a single product by ID.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Product'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
