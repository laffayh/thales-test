import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetUsersListResponse } from 'src/app/models/user/api-user.model';
import { CONST } from 'src/app/config/const';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }

  getUsersList(count: number): Observable<GetUsersListResponse> {
    let index = 0;

    return this.http.get<GetUsersListResponse>(CONST.API.URL, { params: { results: count.toString() } })
      .pipe(
        map(getUsersListResponse => ({
          ...getUsersListResponse,
          results: getUsersListResponse.results.map(result => ({
            ...result,
            id: {
              value: (index++).toString(),
              name: ''
            },
          })),
        }))
      );
  }

}
