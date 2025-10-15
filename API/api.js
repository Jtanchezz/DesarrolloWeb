// ========================================
// API REST SIMPLE PARA GESTIONAR EXPERIENCIA LABORAL
// ========================================

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(cors());
app.use(express.json());

// Esta información se mantiene en memoria.
let experiences = [
  {
    id: 1,
    period: '2023-2025',
    company: 'Amazon Web Services',
    role: 'Cloud Support Associate'
  },
  {
    id: 2,
    period: '2021-2023',
    company: 'Google',
    role: 'Backend Developer'
  },
  {
    id: 3,
    period: '2020-2021',
    company: 'Startup XYZ',
    role: 'Full Stack Intern'
  }
];

const getNextId = () =>
  Math.max(0, ...experiences.map((experience) => experience.id)) + 1;

// GET / - devolver todas las experiencias
app.get('/', (req, res) => {
  res.json(experiences);
});

// GET /:id - devolver una experiencia por ID
app.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    return res.status(404).json({ error: 'Experiencia no encontrada' });
  }

  res.json(experience);
});

// POST / - crear una nueva experiencia
app.post('/', (req, res) => {
  const { period, company, role } = req.body;

  const newExperience = {
    id: getNextId(),
    period: period ?? '',
    company: company ?? '',
    role: role ?? ''
  };

  experiences.push(newExperience);
  res.status(201).json(newExperience);
});

// PATCH /:id - actualizar campos de manera parcial
app.patch('/:id', (req, res) => {
  const id = Number(req.params.id);
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    return res.status(404).json({ error: 'Experiencia no encontrada' });
  }

  const { period, company, role } = req.body;

  if (period !== undefined) experience.period = period;
  if (company !== undefined) experience.company = company;
  if (role !== undefined) experience.role = role;

  res.json(experience);
});

// DELETE /:id - eliminar una experiencia
app.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = experiences.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Experiencia no encontrada' });
  }

  const [deletedExperience] = experiences.splice(index, 1);
  res.json(deletedExperience);
});

// Middleware para rutas inexistentes
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`🚀 API de experiencia escuchando en http://localhost:${PORT}`);
});
