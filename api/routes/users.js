const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../models/userModel");

router.get("/", async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.post("/", async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);

		const newUser = {
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			company_name: req.body.company_name,
			email: req.body.email,
			phone: req.body.phone,
			password: hashedPassword,
			verify_password: hashedPassword, // Save the hashed password
		};
		const user = await User.create(newUser);
		res.status(200).json(user);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
