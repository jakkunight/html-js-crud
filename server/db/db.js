const mysql = require("mysql2");
const { promisify } = require("util");
const connection = mysql.createPool({
	host: "127.0.0.1",
	database: "crud_js",
	user: "root",
	password: "karneval"
});
connection.getConnection((err, conn) => {
	if(err){
		console.log("[ERROR] No se pudo conectar a la base de datos.");
		return -1;
	}
	console.log("[EXITO] Se conectó a la base de datos.");
	return conn;
});

connection.query = promisify(connection.query);

module.exports = connection;
