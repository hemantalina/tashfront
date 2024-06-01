import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() userAdded = new EventEmitter<User>();
  submitted: boolean= false;
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.submitted=true;
    if (this.userForm.valid) {
      this.userAdded.emit(this.userForm.value);
      this.userForm.reset();
      this.submitted=false;
    }
  }
}
