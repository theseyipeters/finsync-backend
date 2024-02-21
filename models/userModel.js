const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		first_name: {
			type: String,
			required: (true, "Please enter your first name"),
		},
		last_name: {
			type: String,
			required: (true, "Please enter your last name"),
		},
		company_name: {
			type: String,
			required: (true, "Please enter your company name"),
		},
		email: {
			type: String,
			required: (true, "Please enter your email"),
			unique: true,
		},
		phone: {
			type: String,
			required: (true, "Please enter your phone Number"),
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
