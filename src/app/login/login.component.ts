import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   constructor(public routes:Router){}

  ngOnInit() {
  }
 login:any = {};
 hint:String;
  logIn(){
    if(this.login.password === '123456'){
      this.routes.navigate(['/success']);
    }else{
      this.hint = 'Please enter password as 123456 for login!';
    }
  }
}
