import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private loggedIn = true;

  constructor(
  	private loginService: LoginService
  	) { }

  logout() {
  	this.loginService.logout().subscribe(
  		res => {
  			location.reload();
  		},
  		err => {
  			console.log(err);
  		}
  	);
  }

  ngOnInit() {
  }

}
