import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../../shared/models/user.model';
import { AuthService } from '../../../../shared/services/auth.service';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: User;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout(){ 
    this.auth.logout();
    this.router.navigate(['/login']);  
  } 

}
