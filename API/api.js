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

const sanitizeString = (value) =>
  typeof value === 'string' ? value.trim() : value;

const validatePayload = (payload, { partial = false } = {}) => {
  const period = sanitizeString(payload.period);
  const company = sanitizeString(payload.company);
  const role = sanitizeString(payload.role);

  if (!partial && (!period || !company || !role)) {
    return {
      valid: false,
      message: 'Los campos "period", "company" y "role" son obligatorios.'
    };
  }

  if (period !== undefined && period === '') {
    return { valid: false, message: 'El campo "period" no puede estar vacío.' };
  }

  if (company !== undefined && company === '') {
    return { valid: false, message: 'El campo "company" no puede estar vacío.' };
  }

  if (role !== undefined && role === '') {
    return { valid: false, message: 'El campo "role" no puede estar vacío.' };
  }

  return {
    valid: true,
    data: { period, company, role }
  };
};

const listExperiences = (req, res) => {
  res.json(experiences);
};

const parseId = (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.status(422).json({ error: 'El parámetro "id" debe ser numérico.' });
    return null;
  }
  return id;
};

const getExperienceById = (req, res) => {
  const id = parseId(req, res);
  if (id === null) return;

  const experience = experiences.find((item) => item.id === id);
  if (!experience) {
    return res.status(404).json({ error: 'Experiencia no encontrada.' });
  }

  res.json(experience);
};

const createExperience = (req, res) => {
  const validation = validatePayload(req.body);
  if (!validation.valid) {
    return res.status(422).json({ error: validation.message });
  }

  const newExperience = {
    id: getNextId(),
    ...validation.data
  };

  experiences.push(newExperience);
  res.status(201).json(newExperience);
};

const updateExperience = (req, res) => {
  const id = parseId(req, res);
  if (id === null) return;

  const experience = experiences.find((item) => item.id === id);
  if (!experience) {
    return res.status(404).json({ error: 'Experiencia no encontrada.' });
  }

  const validation = validatePayload(req.body, { partial: true });
  if (!validation.valid) {
    return res.status(422).json({ error: validation.message });
  }

  const updates = validation.data;
  const hasUpdates = ['period', 'company', 'role'].some(
    (key) => updates[key] !== undefined
  );

  if (!hasUpdates) {
    return res
      .status(422)
      .json({ error: 'Debes enviar al menos un campo válido para actualizar.' });
  }

  if (updates.period !== undefined) experience.period = updates.period;
  if (updates.company !== undefined) experience.company = updates.company;
  if (updates.role !== undefined) experience.role = updates.role;

  res.json(experience);
};

const deleteExperience = (req, res) => {
  const id = parseId(req, res);
  if (id === null) return;

  const index = experiences.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Experiencia no encontrada.' });
  }

  const [deletedExperience] = experiences.splice(index, 1);
  res.json(deletedExperience);
};

const registerRoute = (method, path, handler) => {
  app[method](path, handler);

  const aliasPath = path === '/' ? '/experience' : `/experience${path}`;
  app[method](aliasPath, handler);
};

registerRoute('get', '/', listExperiences);
registerRoute('get', '/:id', getExperienceById);
registerRoute('post', '/', createExperience);
registerRoute('patch', '/:id', updateExperience);
registerRoute('delete', '/:id', deleteExperience);

// Middleware para rutas inexistentes
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada.' });
});

app.listen(PORT, () => {
  console.log(`🚀 API de experiencia escuchando en http://localhost:${PORT}`);
  console.log('📋 Endpoints disponibles:');
  console.log('   GET    /            - Listar experiencias');
  console.log('   GET    /:id         - Obtener una experiencia por ID');
  console.log('   POST   /            - Crear una experiencia');
  console.log('   PATCH  /:id         - Actualizar parcialmente una experiencia');
  console.log('   DELETE /:id         - Eliminar una experiencia');
  console.log('   Alias disponible en /experience');
});
