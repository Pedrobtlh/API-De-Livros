import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("Error", (erro) => {
  console.erro("Erro de Conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o Banco feita com Sucesso!!!");
});

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro Removido Com Sucesso!");
});

export default app;
