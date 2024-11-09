const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos da pasta `build` do React
app.use(express.static(path.join(__dirname, 'client/build')));

// Para qualquer rota não encontrada, envie o `index.html`
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
