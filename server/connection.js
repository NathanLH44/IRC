const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`mongodb://localhost:27042/${process.env.DB_NAME}`, () => {
	console.log("connected to mongodb");
});
