import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];

function buscaLivro(id) {
  return livros.findIndex((livros) => {
    return livros.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.Js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro Cadastrado Com Sucesso!!");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro Removido Com Sucesso!");
});

export default app;

//mongodb+srv://admin:<password>@cluster0.ow8p5bp.mongodb.net/?retryWrites=true&w=majority
