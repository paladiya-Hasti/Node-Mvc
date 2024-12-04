const Product = require('../model/ProductModel');

const CreateProduct = async (req, res) => {
  console.log("request",req.file);
  
  try {
    let product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ err: err.message });
  }
};

const GetProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(201).send(products);
  } catch (error) {
    res.status(500).send({ err: err.message });
  }
};

const GetProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    let product = await Product.findById(productId);
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ err: err.message });
  }
};

const UpdateProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      let product = await Product.findByIdAndUpdate(productId, req.body, { new: true });
      res.status(201).send(product);
    } catch (error) {
      res.status(500).send({ err: err.message });
    }
};

const DeleteProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      let product = await Product.findByIdAndDelete(productId);
      res.status(201).send(product);
    } catch (error) {
      res.status(500).send({ err: err.message });
    }
};

module.exports = {
    CreateProduct,
    GetProducts,
    GetProductById,
    UpdateProduct,
    DeleteProduct,
}
