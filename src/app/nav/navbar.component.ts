import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: [`
        .navbar{background:#275382;}
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px){#searchForm {display:none}}
        li > a.active {color:#ffffff;font-weight:800;background:#000;}
    `]
})
export class NavbarComponent {

    constructor(public auth:AuthService){}
}
