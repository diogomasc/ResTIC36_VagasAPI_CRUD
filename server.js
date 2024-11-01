const express = require("express");
const {
  createVaga,
  updateVaga,
  deleteVaga,
  getVagas,
} = require("./repo/vagas");
const app = express();
const port = 3000;

app.use(express.json());

// Rota para criar uma nova vaga
app.post("/vagas", (req, res) => {
  const { title, description, dateRegistration, telephone, company } = req.body;
  const novaVaga = {
    title,
    description,
    dateRegistration,
    telephone,
    company,
  };

  try {
    const vagaCriada = createVaga(novaVaga);
    res.status(201).json(vagaCriada);
  } catch (erro) {
    res.status(400).json({ message: erro.message });
  }
});

// Rota para obter todas as vagas
app.get("/vagas", (req, res) => {
  try {
    const listaVagas = getVagas();
    res.status(200).json(listaVagas);
  } catch (erro) {
    res.status(500).json({ message: erro.message });
  }
});

// Rota para atualizar uma vaga existente por ID
app.put("/vagas/:id", (req, res) => {
  const vagaId = req.params.id;
  const { title, description, dateRegistration, telephone, company } = req.body;
  const vagaAtualizada = {
    title,
    description,
    dateRegistration,
    telephone,
    company,
  };

  try {
    const vaga = updateVaga(vagaId, vagaAtualizada);
    res.status(200).json(vaga);
  } catch (erro) {
    res.status(404).json({ message: erro.message });
  }
});

// Rota para deletar uma vaga por ID
app.delete("/vagas/:id", (req, res) => {
  const vagaId = req.params.id;

  try {
    deleteVaga(vagaId);
    res.status(204).end(); // Responde sem conteúdo
  } catch (erro) {
    res.status(404).json({ message: erro.message });
  }
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na http://localhost:${port}`);
});
