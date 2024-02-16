const express = require("express");
const app = express();

//routes

app.get("/", (req, res) => {
	res.send("Hello Finsync");
});
app.listen(3000, () => {
	console.log("Finsync is running on port 3000");
});
