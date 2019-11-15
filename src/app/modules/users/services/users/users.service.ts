import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUsersListResponse } from 'src/app/models/user/api-user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }

  getUsersList(count: number): Observable<GetUsersListResponse> {
    return this.http.get<GetUsersListResponse>('https://randomuser.me/api/', { params: { count: count.toString() } });
  }

}
