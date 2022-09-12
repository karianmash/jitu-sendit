import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean;

  constructor(private router: Router) {}
  // private users: User[] = [];

  private users: User[] = [
    {
      fullname: 'Ian Macharia',
      email: 'ianmachariak17@gmail.com',
      username: 'ianmacharia',
      role: 'admin',
      password: '123',
    },
    {
      fullname: 'Christine Karimi',
      email: 'christine@gmail.com',
      username: 'christinekarimi',
      role: 'user',
      password: '123',
    },
    {
      fullname: 'Ephraim Murimi',
      email: 'ephraim@gmail.com',
      username: 'ephraimmurimi',
      role: 'user',
      password: '123',
    },
    {
      fullname: 'Samuel Mwangi',
      email: 'samuel@gmail.com',
      username: 'samuelmwangi',
      role: 'user',
      password: '123',
    },
    {
      fullname: 'Victor Bakali',
      email: 'victor@gmail.com',
      username: 'victorbakali',
      role: 'user',
      password: '123',
    },
  ];

  // get all users
  public getUsers() {
    return this.users;
  }

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
  public createUser(newUser: User): void {
    let { ...res } = newUser;

    let user = {
      ...res,
      role: 'user',
    };

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

        let { confirmPassword, password, ...res } = userInfo;

        let userDetails = {
          ...res,
          isLoggedIn: this.isLoggedIn,
        };

        localStorage.setItem('userInfo', JSON.stringify(userDetails));

        // redirect to dashboard
        if (userDetails.role === 'admin') {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/user/dashboard']);
        }
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
