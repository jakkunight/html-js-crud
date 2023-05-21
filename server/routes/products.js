const express = require("express");
const router = express.Router();
const db = require("../db/db.js");

// Métodos HTTP:
// - GET: Obtener datos
// - POST: Enviar (postear) nuevos datos
// - PUT/PATCH: Modificar datos existentes
// - DELETE: Eliminar datos existentes
// - OPTIONS: Usado para fase de "handshake" (login, logout, etc)

router.get("/products", async (req, res) => {
	try{
		const result = await db.query("SELECT * FROM products");
		console.log(result);
		res.json(await JSON.stringify(result));
	}catch(e){
		console.log(e);
		res.sendStatus(400);
	}
});

router.post("/products", async (req, res) => {
	try{
		const result = await db.query("INSERT INTO products SET ?", [req.body]);
		res.json(await JSON.stringify(result));
	}catch(e){
		console.log(e);
		res.sendStatus(400);
	}
});

router.put("/products", async (req, res) => {
	try{
		const {
			id,
			name,
			description,
			price
		} = req.body;
		const newData = {
			name,
			description,
			price
		};
		
		const result = await db.query("UPDATE products SET ? WHERE id = ?", [newData, id]);
		res.json(await JSON.stringify(result));
	}catch(e){
		console.log(e);
		res.sendStatus(400);
	}
});
router.delete("/products", async (req, res) => {
	try{		
		const result = await db.query("DELETE FROM products WHERE id = ?", [req.body.id]);
		res.json(await JSON.stringify(result));
	}catch(e){
		console.log(e);
		res.sendStatus(400);
	}
});


module.exports = router;
