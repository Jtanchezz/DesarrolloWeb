import { Injectable } from '@angular/core'; // Importa el decorador Injectable para declarar el servicio.
import { HttpClient, HttpParams } from '@angular/common/http'; // Importa HttpClient para hacer peticiones y HttpParams para armar parámetros.
import { Observable, map } from 'rxjs'; // Carga Observable para tipar la respuesta y map para transformarla.

interface StackOverflowUserResponse {
  items: StackOverflowUserItem[]; // Arreglo de usuarios devuelto por la API de Stack Overflow.
}

interface StackOverflowUserItem {
  user_id: number; // Identificador único del usuario.
  display_name: string; // Nombre público del perfil.
  profile_image?: string; // URL opcional de la imagen del perfil.
  reputation: number; // Puntuación total de reputación del usuario.
  location?: string; // Ubicación geográfica opcional.
  link: string; // Enlace directo al perfil en Stack Overflow.
  badge_counts: {
    gold: number; // Número de medallas de oro.
    silver: number; // Número de medallas de plata.
    bronze: number; // Número de medallas de bronce.
  };
  answer_count?: number; // Cantidad de respuestas publicadas por el usuario.
  question_count?: number; // Cantidad de preguntas realizadas por el usuario.
  creation_date?: number; // Fecha de creación del perfil en formato Unix epoch (segundos).
}

export interface StackOverflowProfile {
  id: number; // Identificador usado dentro de la app.
  displayName: string; // Nombre formateado para mostrar.
  profileImage: string | null; // URL de la imagen o null si no existe.
  reputation: number; // Reputación que se mostrará en la tarjeta.
  location: string | null; // Ubicación preparada para la vista o null.
  profileUrl: string; // Enlace directo que abrirá el perfil.
  badges: {
    gold: number; // Medallas de oro exhibidas.
    silver: number; // Medallas de plata exhibidas.
    bronze: number; // Medallas de bronce exhibidas.
  };
  answers?: number; // Total de respuestas que se mostrará si existe.
  questions?: number; // Total de preguntas que se mostrará si existe.
  memberSince?: Date; // Fecha convertida a Date para usar en la interfaz.
}

@Injectable({ providedIn: 'root' })
export class StackOverflowService {
  private readonly apiUrl = 'https://api.stackexchange.com/2.3/users'; // Endpoint base de la API de Stack Exchange para usuarios.

  constructor(private readonly http: HttpClient) {} // Inyecta HttpClient para ejecutar peticiones HTTP.

  getProfile(userId: number): Observable<StackOverflowProfile | null> { // Obtiene el perfil público de un usuario por id.
    const url = `${this.apiUrl}/${userId}`; // Construye la URL apuntando al usuario específico.
    const params = new HttpParams().set('site', 'stackoverflow'); // Define el parámetro obligatorio para indicar el sitio.

    return this.http.get<StackOverflowUserResponse>(url, { params }).pipe( // Ejecuta la petición GET con los parámetros dados.
      map((response) => { // Transforma la respuesta cruda de la API.
        const user = response.items?.[0]; // Toma el primer usuario devuelto por la API (si existe).
        if (!user) { // Verifica si la API no devolvió resultados.
          return null; // Devuelve null cuando no hay datos asociados al id.
        }
        return {
          id: user.user_id, // Asigna el id del usuario.
          displayName: user.display_name, // Usa el nombre público original.
          profileImage: user.profile_image ?? null, // Mantiene la imagen o null si está ausente.
          reputation: user.reputation, // Copia la reputación actual.
          location: user.location ?? null, // Usa la ubicación o null si no existe.
          profileUrl: user.link, // Proporciona el enlace al perfil.
          badges: user.badge_counts, // Copia el objeto de medallas sin modificaciones.
          answers: user.answer_count, // Incluye la cantidad de respuestas si está disponible.
          questions: user.question_count, // Incluye la cantidad de preguntas si está disponible.
          memberSince: user.creation_date ? new Date(user.creation_date * 1000) : undefined // Convierte la fecha de creación a Date si existe.
        } satisfies StackOverflowProfile; // Garantiza que el objeto cumple la interfaz StackOverflowProfile.
      })
    );
  }
}
