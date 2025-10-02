import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface GitHubRepoResponse {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export interface ProjectItem {
  id: number;
  name: string;
  url: string;
  description: string;
  language: string;
  stars: number;
  updatedAt: string;
}

@Injectable({ providedIn: 'root' })
export class GitHubProjectsService {
  private readonly apiUrl = 'https://api.github.com/users';

  constructor(private readonly http: HttpClient) {}

  getProjects(username: string, perPage = 6): Observable<ProjectItem[]> {
    const url = `${this.apiUrl}/${encodeURIComponent(username)}/repos`;
    const params = new HttpParams().set('sort', 'updated').set('per_page', perPage);
    return this.http.get<GitHubRepoResponse[]>(url, { params }).pipe(
      map((repos) =>
        repos.map((repo) => ({
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          description: repo.description ?? 'Sin descripción disponible.',
          language: repo.language ?? 'Sin lenguaje definido',
          stars: repo.stargazers_count,
          updatedAt: repo.updated_at
        }))
      )
    );
  }
}
