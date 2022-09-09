import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean;

  private users: User[] = [];

  constructor(private router: Router) {}

  // Check login status
  public get loginStatus(): boolean {
    let user = JSON.parse(localStorage.getItem('userInfo'));

    if (user !== null) {
      this.isLoggedIn = user.isLoggedIn;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  // Create user
  public createUser(user: User): void {
    this.users.push(user);
  }

  // Authenticate user
  public loginUser(user: User): boolean {
    this.users?.forEach((userInfo) => {
      if (
        userInfo.email === user.email &&
        userInfo.password === user.password
      ) {
        this.isLoggedIn = true;

        let { confirmPassword, password, ...rest } = userInfo;

        let userDetails = {
          ...rest,
          isLoggedIn: this.isLoggedIn,
        };

        localStorage.setItem('userInfo', JSON.stringify(userDetails));

        // redirect to admin dashboard
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.isLoggedIn = false;
      }
    });

    return this.isLoggedIn;
  }

  // logout
  public logout() {
    localStorage.removeItem('userInfo');

    this.router.navigate(['/']);
  }
}
