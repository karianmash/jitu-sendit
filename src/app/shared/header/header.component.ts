import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  userName: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    setInterval(() => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));

      if (userInfo !== null) {
        this.isLoggedIn = userInfo?.isLoggedIn;
        this.userName = userInfo?.user.fullname;
      } else {
        this.isLoggedIn = this.authService.loginStatus;
      }
    }, 100);
  }

  // logout
  logout(): void {
    this.authService.logout();
  }
}
