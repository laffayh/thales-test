import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetUsersListResponse } from 'src/app/models/user/api-user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }

  getUsersList(count: number): Observable<GetUsersListResponse> {
    return this.http.get<GetUsersListResponse>('https://randomuser.me/api/', { params: { results: count.toString() } })
      .pipe(
        map(getUsersListResponse => ({
          ...getUsersListResponse,
          results: getUsersListResponse.results.map(result => ({
            ...result,
            id: result.id.value ? result.id : { value: result.name.first + result.name.last, name: '' },
          })),
        }))
      );
  }

}
