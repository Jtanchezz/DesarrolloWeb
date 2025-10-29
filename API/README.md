# API de Experiencia Laboral

API REST en Node.js + Express que expone datos en memoria sobre la experiencia laboral para integrarlos en el CV.

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
cd API
npm install
```

## Ejecución

```bash
npm run dev
```

El servidor quedará disponible en `http://localhost:3001`. Todos los endpoints responden JSON y también están disponibles con el prefijo `/experience`.

## Endpoints

### GET `/`

Obtiene la lista de experiencias laborales.

Respuesta 200 OK:

```json
[
  {
    "id": 1,
    "period": "2023-2025",
    "company": "Amazon Web Services",
    "role": "Cloud Support Associate"
  }
]
```

Errores:
- 404 `{"error":"Experiencia no encontrada."}` (solo aplica en `/experience/:id`)

### GET `/:id`

Busca una experiencia por su identificador.

Respuestas:
- 200 OK con el objeto encontrado.
- 404 Not Found si el ID no existe.
- 422 Unprocessable Entity si el ID no es numérico.

### POST `/`

Crea una experiencia nueva.

Body esperado:

```json
{
  "period": "2024",
  "company": "Mi Empresa",
  "role": "Desarrollador"
}
```

Respuestas:
- 201 Created con la experiencia creada.
- 422 Unprocessable Entity si falta algún campo requerido o llega vacío.

### PATCH `/:id`

Actualiza uno o varios campos de una experiencia existente.

Respuestas:
- 200 OK con la experiencia actualizada.
- 404 Not Found si el ID no existe.
- 422 Unprocessable Entity si el ID no es numérico o si no se envía al menos un campo válido.

### DELETE `/:id`

Elimina una experiencia por ID.

Respuestas:
- 200 OK con la experiencia eliminada.
- 404 Not Found si el ID no existe.
- 422 Unprocessable Entity si el ID no es numérico.

### Rutas alias `/experience`

Todos los endpoints anteriores están disponibles duplicados bajo `/experience`, por ejemplo `GET /experience`, `POST /experience`, etc.

## Validaciones y errores

- Todas las respuestas son JSON.
- CORS habilitado para cualquier origen.
- Si la ruta no existe, la API devuelve `404` con `{"error":"Ruta no encontrada."}`.

## Evidencias

- Dentro del folder evidencias. 
