import {Component} from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
    templateUrl:'./login.component.html',
    styles:[`
        em{float:right; color:#e05c65; padding-left:10px;}
    `]

})

export class LoginComponent {

    userName:any
    password:any
    mouseOverLogin!:boolean

    constructor(private auth:AuthService,private router:Router){}

    login(formValues:any){
        console.log(formValues)

        this.auth.loginUser(formValues.userName,formValues.password)
        this.router.navigate(['projects'])

    }

    cancel(){
        this.router.navigate(['projects'])
    }
}