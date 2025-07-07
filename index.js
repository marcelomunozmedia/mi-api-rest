const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let usuarios = [
  { id: 1, nombre: 'Marcelo', email: 'marcelo@example.com' }
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  const user = usuarios.find(u => u.id == req.params.id);
  user ? res.json(user) : res.status(404).send('No encontrado');
});

app.post('/usuarios', (req, res) => {
  const nuevo = req.body;
  nuevo.id = usuarios.length + 1;
  usuarios.push(nuevo);
  res.status(201).json(nuevo);
});

app.listen(PORT, () => {
  console.log(`API corriendo en el puerto ${PORT}`);
});

