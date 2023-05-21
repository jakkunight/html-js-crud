const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileupload = require("express-fileupload");
const cors = require("cors");
const products = require("./routes/products.js");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(fileupload());

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});

app.use(products);

module.exports = app;
