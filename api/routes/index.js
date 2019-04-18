var express = require('express');
var router = express.Router();
const productController = require('../controllers/products');

/* GET List of products */
router.route('/getproducts')
  .get(productController.getProducts)

module.exports = router;
