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

    constructor(private auth:AuthService){}

    login(formValues:any){
        console.log(formValues)

        this.auth.loginUser(formValues.userName,formValues.password)

    }
}