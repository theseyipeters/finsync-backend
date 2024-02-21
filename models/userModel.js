const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		first_name: {
			type: String,
			required: [true, "Please enter your first name"],
		},
		last_name: {
			type: String,
			required: [true, "Please enter your last name"],
		},
		company_name: {
			type: String,
			required: [true, "Please enter your company name"],
		},
		email: {
			type: String,
			required: [true, "Please enter your email"],
			unique: true,
		},
		phone: {
			type: String,
			required: [true, "Please enter your phone number"],
		},
		password: {
			type: String,
			required: [true, "Please enter a password"],
		},
		verify_password: {
			type: String,
			required: [true, "Please verify your password"],
			validate: {
				validator: function (v) {
					return this.password === v;
				},
				message: "Passwords do not match",
			},
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
