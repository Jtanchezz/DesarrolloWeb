import { Injectable } from '@angular/core'; // Importa el decorador Injectable para declarar un servicio.
import { HttpClient, HttpParams } from '@angular/common/http'; // Carga HttpClient para hacer peticiones y HttpParams para construir parámetros.
import { Observable } from 'rxjs'; // Importa Observable para tipar las respuestas asíncronas.
import { map } from 'rxjs/operators'; // Importa el operador map para transformar la respuesta HTTP.

interface GitHubRepoResponse {
  id: number; // Identificador único del repositorio según GitHub.
  name: string; // Nombre del repositorio.
  html_url: string; // URL pública del repositorio.
  description: string | null; // Descripción opcional del repositorio.
  language: string | null; // Lenguaje principal del repositorio.
  stargazers_count: number; // Cantidad de estrellas otorgadas al repositorio.
  updated_at: string; // Fecha y hora de la última actualización del repositorio.
}

export interface ProjectItem {
  id: number; // Identificador único que se usará en la vista.
  name: string; // Nombre del proyecto para mostrar en la tarjeta.
  url: string; // Enlace público del repositorio.
  description: string; // Descripción amigable del proyecto.
  language: string; // Lenguaje mostrado al usuario.
  stars: number; // Número de estrellas mostradas en la interfaz.
  updatedAt: string; // Fecha de la última actualización formateada como string.
}

@Injectable({ providedIn: 'root' })
export class GitHubProjectsService {
  private readonly apiUrl = 'https://api.github.com/users'; // Endpoint base de la API de GitHub para usuarios.

  constructor(private readonly http: HttpClient) {} // Inyecta HttpClient para lanzar peticiones HTTP.

  getProjects(username: string, perPage = 6): Observable<ProjectItem[]> { // Obtiene la lista de repositorios de un usuario.
    const url = `${this.apiUrl}/${encodeURIComponent(username)}/repos`; // Construye la URL completa protegiendo caracteres especiales del usuario.
    const params = new HttpParams().set('sort', 'updated').set('per_page', perPage); // Define parámetros para ordenar por actualización y limitar resultados.
    return this.http.get<GitHubRepoResponse[]>(url, { params }).pipe( // Lanza la petición GET con los parámetros configurados.
      map((repos) => // Transforma el arreglo original de GitHub.
        repos.map((repo) => ({ // Crea un nuevo objeto Proyecto para cada repositorio.
          id: repo.id, // Copia el id del repositorio original.
          name: repo.name, // Copia el nombre del repositorio.
          url: repo.html_url, // Usa la URL pública del repositorio.
          description: repo.description ?? 'Sin descripción disponible.', // Rellena descripción o usa un texto por defecto.
          language: repo.language ?? 'Sin lenguaje definido', // Muestra el lenguaje principal o un mensaje alternativo.
          stars: repo.stargazers_count, // Copia la cantidad de estrellas.
          updatedAt: repo.updated_at // Copia la fecha de la última actualización.
        }))
      )
    );
  }
}
