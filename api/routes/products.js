const express = require("express");
const router = express.Router();
const Product = require("../../models/productModel");

router.get("/", async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Create a new product
router.post("/", async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: error.message });
	}
});

// router.get("/:productId", (req, res, next) => {
// 	const id = req.params.productId;
// 	if (id === "special") {
// 		res.status(200).json({
// 			message: "Handling GET Request for one product",
// 			id: id,
// 		});
// 	} else {
// 		res.status(200).json({
// 			message: "You passed and ID",
// 		});
// 	}
// });
// router.patch("/:productId", (req, res, next) => {
// 	res.status(200).json({
// 		message: "Updated product",
// 	});
// });
// router.delete("/:productId", (req, res, next) => {
// 	res.status(200).json({
// 		message: "Deleted product",
// 	});
// });

module.exports = router;
