const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Prueba desde Docker");
});

app.listen(3000, () => {
  console.log("Servidor activo en http://localhost:3000");
});
