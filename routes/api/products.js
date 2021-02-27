const express = require('express');
const router = express.Router();
const Product = require('../../models/Products');

router.get(('/'), async (req, res) => {
  const allProducts = await Product.find();
  res.send(allProducts);
  console.log("Product list has been sent!");
});

router.post('/', (req, res) => {
  console.log(req.body);
  let prod = Product.findOne({
    id: req.body.id
  }).exec();
  if (prod !== null) {
     res.status(200).end();
  }
  const newProduct = new Product({
    id: req.body.id,
    product_name: req.body.product_name,
    quantity: req.body.quantity,
    price: req.body.price,
  });

  newProduct.save();
   res.status(200).end();
});

router.delete('/:id', (req, res) => {
  Product.findOneAndDelete({
    id: req.params.id
  }).exec();
  res.status(200).json({
    status: "deleted"
  });
});

module.exports = router;