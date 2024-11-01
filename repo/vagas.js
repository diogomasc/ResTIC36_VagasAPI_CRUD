const { v4: uuidv4 } = require("uuid");

let vagas = [];

// Função para criar uma nova vaga
function createVaga({
  title,
  description,
  dateRegistration,
  telephone,
  company,
}) {
  const vaga = {
    id: uuidv4(),
    title,
    description,
    dateRegistration,
    telephone,
    company,
  };
  vagas.push(vaga);
  return vaga;
}

// Função para atualizar uma vaga existente
function updateVaga(
  id,
  { title, description, dateRegistration, telephone, company }
) {
  const index = vagas.findIndex((vaga) => vaga.id === id);
  if (index === -1) {
    throw new Error("Vaga não encontrada");
  }

  vagas[index] = {
    id,
    title,
    description,
    dateRegistration,
    telephone,
    company,
  };
  return vagas[index];
}

// Função para deletar uma vaga existente
function deleteVaga(id) {
  const index = vagas.findIndex((vaga) => vaga.id === id);
  if (index === -1) {
    throw new Error("Vaga não encontrada");
  }
  vagas.splice(index, 1);
}

// Função para obter todas as vagas
function getVagas() {
  return vagas;
}

module.exports = {
  createVaga,
  updateVaga,
  deleteVaga,
  getVagas,
};
