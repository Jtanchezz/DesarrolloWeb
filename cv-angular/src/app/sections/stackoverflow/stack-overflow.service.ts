import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface StackOverflowUserResponse {
  items: StackOverflowUserItem[];
}

interface StackOverflowUserItem {
  user_id: number;
  display_name: string;
  profile_image?: string;
  reputation: number;
  location?: string;
  link: string;
  badge_counts: {
    gold: number;
    silver: number;
    bronze: number;
  };
  answer_count?: number;
  question_count?: number;
  creation_date?: number;
}

export interface StackOverflowProfile {
  id: number;
  displayName: string;
  profileImage: string | null;
  reputation: number;
  location: string | null;
  profileUrl: string;
  badges: {
    gold: number;
    silver: number;
    bronze: number;
  };
  answers?: number;
  questions?: number;
  memberSince?: Date;
}

@Injectable({ providedIn: 'root' })
export class StackOverflowService {
  private readonly apiUrl = 'https://api.stackexchange.com/2.3/users';

  constructor(private readonly http: HttpClient) {}

  getProfile(userId: number): Observable<StackOverflowProfile | null> {
    const url = `${this.apiUrl}/${userId}`;
    const params = new HttpParams().set('site', 'stackoverflow');

    return this.http.get<StackOverflowUserResponse>(url, { params }).pipe(
      map((response) => {
        const user = response.items?.[0];
        if (!user) {
          return null;
        }
        return {
          id: user.user_id,
          displayName: user.display_name,
          profileImage: user.profile_image ?? null,
          reputation: user.reputation,
          location: user.location ?? null,
          profileUrl: user.link,
          badges: user.badge_counts,
          answers: user.answer_count,
          questions: user.question_count,
          memberSince: user.creation_date ? new Date(user.creation_date * 1000) : undefined
        } satisfies StackOverflowProfile;
      })
    );
  }
}
