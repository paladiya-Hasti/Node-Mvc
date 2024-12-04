const {Router} = require('express');
const { GetProducts, GetProductById, UpdateProduct, DeleteProduct } = require('../controller/Product.Controllers')

const ProductRoute = Router();

ProductRoute.get("/",GetProducts)

ProductRoute.get("/:productId",GetProductById)


ProductRoute.patch("/:productId",UpdateProduct)

ProductRoute.delete("/:productId",DeleteProduct)

module.exports = ProductRoute;