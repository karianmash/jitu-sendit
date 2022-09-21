import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { baseUrl } from 'src/app/common/api';
import { LoginRes, User } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean;

  constructor(private router: Router, private http: HttpClient) {}
  // private users: User[] = [];

  public getUsers(): Observable<User[]> {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return this.http.get<User[]>(`${baseUrl}/users/get_users`, {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${userInfo.token}`
      ),
    });
  }

  // Create user
  public createUser(newUser: User): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${baseUrl}/users/register_user`,
      newUser
    );
  }

  // Check login status
  public get loginStatus(): boolean {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfo !== null) {
      this.isLoggedIn = userInfo.isLoggedIn;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  // Authenticate user
  public loginUser(user: User) {
    let observable = this.http.post<LoginRes>(
      `${baseUrl}/users/login_user`,
      user
    );

    observable.subscribe({
      next: (data) => {
        this.isLoggedIn = true;

        const { ...rest } = data;

        let userDetails = {
          ...rest,
          isLoggedIn: this.isLoggedIn,
        };

        localStorage.setItem('userInfo', JSON.stringify(userDetails));

        // redirect to dashboard
        if (userDetails.user.user_role === 'admin') {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/user/dashboard']);
        }
      },
      error: (err) => {},
    });

    return observable;
  }

  // logout
  public logout() {
    localStorage.removeItem('userInfo');

    this.router.navigate(['/']);
  }
}
