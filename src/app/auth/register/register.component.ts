import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  reactiveRegisterForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.reactiveRegisterForm = new FormGroup({
      fullname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
  }

  // Create
  onSubmit() {
    let user = {
      fullname: this.reactiveRegisterForm.value.username,
      email: this.reactiveRegisterForm.value.email,
      username: this.reactiveRegisterForm.value.username,
      password: this.reactiveRegisterForm.value.password,
      confirmPassword: this.reactiveRegisterForm.value.confirmpassword,
    };

    this.reactiveRegisterForm = new FormGroup({
      fullname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
    console.log(user);
  }
}
