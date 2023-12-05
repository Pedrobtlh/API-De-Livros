import app from "./src/app.js";

const PORT = 3000;

const rotas = {
  "/": "Curso de Express API",
  "/livros": "Entrei na Rota Livros",
  "/autores": "Entrei na Rota Autores",
};

app.listen(PORT, () => {
  console.log("Servidor Iniciado");
});
