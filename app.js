const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./api/routes/products");
const userRoutes = require("./api/routes/users");

mongoose
	.connect(
		"mongodb+srv://admin:" +
			process.env.MONGO_ATLAS_PW +
			"@finsyncapi.tyf2luw.mongodb.net/Finsync-API?retryWrites=true&w=majority"
	)
	.then(() => {
		console.log("connected to Mongo DB");
		app.listen(3000, () => {
			console.log("Finsync is running on port 3000");
		});
	})
	.catch((error) => {
		console.log(error);
	});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);

	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
		return res.status(200).json({});
	}
	next();
});

app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.use((req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;
