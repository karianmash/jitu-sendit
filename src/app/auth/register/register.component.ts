import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  reactiveRegisterForm: FormGroup;

  user: User;
  dontMatch: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.reactiveRegisterForm = new FormGroup({
      fullname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmpassword: new FormControl(null, Validators.required),
    });
  }

  // Handle form submission
  onSubmit() {
    let user = {
      fullname: this.reactiveRegisterForm.value.fullname,
      email: this.reactiveRegisterForm.value.email,
      username: this.reactiveRegisterForm.value.username,
      password: this.reactiveRegisterForm.value.password,
      confirmPassword: this.reactiveRegisterForm.value.confirmpassword,
    };

    for (let inputValue in user) {
      if (user[inputValue] === null) {
        user[inputValue] = 'invalid';
      }
    }
    this.user = user;

    this.registerUser();
  }

  // Register user
  registerUser() {
    let user = this.user;

    if (
      user.fullname !== 'invalid' &&
      user.email !== 'invalid' &&
      user.username !== 'invalid' &&
      user.password !== 'invalid' &&
      user.confirmPassword !== 'invalid'
    ) {
      if (user.password !== user.confirmPassword) {
        this.dontMatch = true;
      } else {
        let { confirmPassword, ...rest } = this.user;

        this.authService.createUser(rest).subscribe((data) => {
          console.log(data);
        });

        this.router.navigate(['/auth/login']);
      }
    }
  }
}
