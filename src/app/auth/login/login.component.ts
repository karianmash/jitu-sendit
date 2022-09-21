import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interface/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('form') loginForm: NgForm;

  noPassword: boolean;
  noEmail: boolean;
  invalidCreadentials: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onFormSubmit() {
    let user: User = {
      email: '',
      password: '',
    };

    if (this.loginForm.value.email === '') {
      this.noEmail = true;
    } else {
      this.noEmail = false;
      user.email = this.loginForm.value.email;
    }

    if (this.loginForm.value.password === '') {
      this.noPassword = true;
    } else {
      this.noPassword = false;
      user.password = this.loginForm.value.password;
    }

    if (user.email !== '' && user.password !== '') {
      // login user
      this.loginUser(user);
    }
  }

  // login user
  loginUser(user: User) {
    this.authService.loginUser(user).subscribe({
      error: (err) => {
        this.invalidCreadentials = true;
      },
    });
  }
}
