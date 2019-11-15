import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, delay } from 'rxjs/operators';
import { loadUsers } from 'src/app/modules/users/store/actions/users-actions';
import { getUsersLoaded } from 'src/app/modules/users/store/selectors/users-selectors';

import { AppState } from '../../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class PreloadService {

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  async load(): Promise<boolean> {
    this.store.dispatch(loadUsers({ count: 30 }));

    return new Promise(resolve => {
      this.store.pipe(
        select(getUsersLoaded),
        filter(loaded => loaded),
      ).subscribe(resolve);
    });
  }
}
