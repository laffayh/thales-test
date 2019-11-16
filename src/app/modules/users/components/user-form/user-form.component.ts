import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: [ './user-form.component.scss' ]
})
export class UserFormComponent implements OnChanges {

  @Input()
  user: User;

  @Output()
  userUpdated = new EventEmitter<User>();

  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && changes.user.currentValue) {
      this.userForm = this.getUserForm(changes.user.currentValue);
    }
  }

  onSubmitUserForm() {
    if (this.userForm.valid) {
      this.userUpdated.emit({
        ...this.user,
        name: {
          ...this.user.name,
          first: this.userForm.value.first,
          last: this.userForm.value.last,
        },
        location: {
          ...this.user.location,
          coordinates: {
            ...this.user.location.coordinates,
            longitude: this.userForm.value.longitude,
            latitude: this.userForm.value.latitude,
          }
        }
      });
    }
  }

  private getUserForm(user: User): FormGroup {
    return this.fb.group({
      first: [ user.name.first, Validators.required ],
      last: [ user.name.last, Validators.required ],
      latitude: [ user.location.coordinates.latitude, Validators.required ],
      longitude: [ user.location.coordinates.longitude, Validators.required ],
    });
  }
}
