const express = require("express");
const productRouter = express.Router()

const {verifyToken, verifyTokenAdmin} = require("../middleware/authMiddleware")


const { getAllProducts, getSingleProduct, createProduct } = require('../controllers/productController')


productRouter.get("/products", verifyToken, getAllProducts );
productRouter.get("/products/:id", verifyToken, getSingleProduct);
productRouter.post("/products",verifyTokenAdmin, createProduct);
// productRouter.put("/products/:id", updateSingleProduct);
// productRouter.delete("/products/:id", deleteSingleProduct);




module.exports = productRouter
