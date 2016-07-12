import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
	selector : 'login-cmp',
	templateUrl : './pages/login/components/login.html',
	directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
	name: string;
	pass: string;
	constructor(private router: Router) {}

	public doLogin() {
		let link = ['/dashboard','/home'];
		console.log(this.name, this.pass, link);
  		this.router.navigate(link);
	}
}
