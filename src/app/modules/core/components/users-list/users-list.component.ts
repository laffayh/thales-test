import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: [ './users-list.component.scss' ]
})
export class UsersListComponent implements OnInit {

  @Input()
  users: Array<User>;

  @Output()
  searched = new EventEmitter<string>();

  searchInput: FormControl;

  totalCount: number;

  constructor() { }

  ngOnInit() {
    this.totalCount = this.users.length;
    this.searchInput = new FormControl('');
    this.searchInput.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500),
    ).subscribe(searchTerm => {
      this.searched.emit(searchTerm);
    });
  }

  emptySearchInput() {
    this.searchInput.setValue('');
  }
}
